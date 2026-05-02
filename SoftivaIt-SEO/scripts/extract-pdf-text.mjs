import fs from "node:fs";
import zlib from "node:zlib";

const pdfPath = process.argv[2];
if (!pdfPath) {
  console.error("Usage: node scripts/extract-pdf-text.mjs <pdf-path>");
  process.exit(2);
}

const buf = fs.readFileSync(pdfPath);
const text = buf.toString("latin1");

function ascii85Decode(inputLatin1) {
  // Handles Adobe ASCII85 with optional <~ ~> wrappers.
  let s = inputLatin1.trim();
  if (s.startsWith("<~")) s = s.slice(2);
  if (s.endsWith("~>")) s = s.slice(0, -2);

  const out = [];
  let group = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "\n" || ch === "\r" || ch === "\t" || ch === " " || ch === "\f") continue;
    if (ch === "z" && group.length === 0) {
      out.push(0, 0, 0, 0);
      continue;
    }
    if (ch === "~") break;
    group.push(ch);
    if (group.length === 5) {
      let acc = 0;
      for (const c of group) acc = acc * 85 + (c.charCodeAt(0) - 33);
      out.push((acc >>> 24) & 0xff, (acc >>> 16) & 0xff, (acc >>> 8) & 0xff, acc & 0xff);
      group = [];
    }
  }
  if (group.length > 0) {
    const padding = 5 - group.length;
    while (group.length < 5) group.push("u"); // 'u' = 84
    let acc = 0;
    for (const c of group) acc = acc * 85 + (c.charCodeAt(0) - 33);
    const bytes = [(acc >>> 24) & 0xff, (acc >>> 16) & 0xff, (acc >>> 8) & 0xff, acc & 0xff];
    out.push(...bytes.slice(0, 4 - padding));
  }
  return Buffer.from(out);
}

function findDictStart(beforeStreamIndex) {
  // Best-effort scan backwards for a '<<' that starts the object dictionary.
  const lookback = Math.max(0, beforeStreamIndex - 4000);
  const window = text.slice(lookback, beforeStreamIndex);
  const idx = window.lastIndexOf("<<");
  return idx === -1 ? -1 : lookback + idx;
}

function extractLiteralStrings(contentLatin1) {
  // Extract PDF literal strings: (...) with backslash escapes.
  const strings = [];
  let i = 0;
  while (i < contentLatin1.length) {
    if (contentLatin1[i] !== "(") {
      i++;
      continue;
    }
    i++; // skip '('
    let depth = 1;
    let out = "";
    while (i < contentLatin1.length && depth > 0) {
      const ch = contentLatin1[i];
      if (ch === "\\") {
        const next = contentLatin1[i + 1];
        if (next === undefined) break;
        // Common escapes: \n \r \t \b \f \( \) \\
        if (next === "n") out += "\n";
        else if (next === "r") out += "\r";
        else if (next === "t") out += "\t";
        else if (next === "b") out += "\b";
        else if (next === "f") out += "\f";
        else if (next === "(") out += "(";
        else if (next === ")") out += ")";
        else if (next === "\\") out += "\\";
        else out += next;
        i += 2;
        continue;
      }
      if (ch === "(") {
        depth++;
        out += ch;
        i++;
        continue;
      }
      if (ch === ")") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
        out += ch;
        i++;
        continue;
      }
      out += ch;
      i++;
    }
    if (out.trim().length > 0) strings.push(out);
  }
  return strings;
}

const streamRegex = /stream\r?\n/g;
const allText = [];
let match;
while ((match = streamRegex.exec(text)) !== null) {
  const streamHeaderEnd = match.index + match[0].length;
  const endStreamIdx = text.indexOf("endstream", streamHeaderEnd);
  if (endStreamIdx === -1) break;

  const dictStart = findDictStart(match.index);
  const dictSnippet = dictStart === -1 ? "" : text.slice(dictStart, match.index);
  const hasFlate = dictSnippet.includes("FlateDecode");
  const hasAscii85 = dictSnippet.includes("ASCII85Decode");
  if (!hasFlate) continue;

  const rawStreamLatin1 = text.slice(streamHeaderEnd, endStreamIdx).trim();
  let data;
  try {
    data = hasAscii85 ? ascii85Decode(rawStreamLatin1) : Buffer.from(rawStreamLatin1, "latin1");
    const inflated = zlib.inflateSync(data);
    const inflatedLatin1 = inflated.toString("latin1");

    // Heuristic: content streams contain PDF text operators with literal strings.
    if (inflatedLatin1.includes("Tj") || inflatedLatin1.includes("TJ")) {
      const strings = extractLiteralStrings(inflatedLatin1);
      for (const s of strings) {
        const cleaned = s.replace(/\s+/g, " ").trim();
        if (cleaned.length >= 2) allText.push(cleaned);
      }
    }
  } catch {
    // Ignore streams we can't decode.
  }
}

// De-duplicate while keeping order.
const seen = new Set();
const unique = [];
for (const line of allText) {
  if (seen.has(line)) continue;
  seen.add(line);
  unique.push(line);
}

process.stdout.write(unique.join("\n") + "\n");

