import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  image: string;
};

const SITE_URL = 'https://softivait.com';
const DEFAULT_IMAGE = `${SITE_URL}/hero.jpg`;

function getSeo(pathname: string): SeoConfig {
  if (pathname === '/') {
    return {
      title: 'SoftivaIT - Intelligent Document Processing',
      description:
        'SoftivaIT provides AI-powered Intelligent Document Processing (IDP) solutions to automate extraction, classification, redaction, and workflow automation.',
      canonicalPath: '/',
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname.startsWith('/products')) {
    return {
      title: 'Products | SoftivaIT',
      description:
        'Explore SoftivaIT products for IDP, lead generation, document redaction, and data scrubbing.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname.startsWith('/platform')) {
    return {
      title: 'Platform | SoftivaIT',
      description:
        'Discover SoftivaIT’s IDP platform capabilities including OCR, NLP, data extraction, integrations, APIs, webhooks, and security.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname.startsWith('/solutions')) {
    return {
      title: 'Solutions | SoftivaIT',
      description:
        'Industry-focused Intelligent Document Processing solutions for banking, healthcare, legal, logistics, manufacturing, and retail.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname.startsWith('/services')) {
    return {
      title: 'Services | SoftivaIT',
      description:
        'Services for custom AI agents, traditional IDP platforms, and hybrid automation solutions.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname.startsWith('/resources')) {
    return {
      title: 'Resources | SoftivaIT',
      description: 'Guides, case studies, webinars, FAQs, and tools for Intelligent Document Processing.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname.startsWith('/training')) {
    return {
      title: 'Training | SoftivaIT',
      description: 'Platform and custom training for Intelligent Document Processing and automation teams.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About | SoftivaIT',
      description:
        'Learn about SoftivaIT and our expertise delivering AI-powered Intelligent Document Processing solutions.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact | SoftivaIT',
      description: 'Get in touch with SoftivaIT about IDP solutions, demos, and partnership opportunities.',
      canonicalPath: pathname,
      image: DEFAULT_IMAGE,
    };
  }

  return {
    title: 'SoftivaIT - Intelligent Document Processing',
    description:
      'SoftivaIT provides AI-powered Intelligent Document Processing (IDP) solutions to automate extraction, classification, redaction, and workflow automation.',
    canonicalPath: pathname || '/',
    image: DEFAULT_IMAGE,
  };
}

function ensureMetaByName(name: string): HTMLMetaElement {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  return meta;
}

function ensureMetaByProperty(property: string): HTMLMetaElement {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  return meta;
}

function ensureLink(rel: string): HTMLLinkElement {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  return link;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const canonicalUrl = `${SITE_URL}${seo.canonicalPath === '/' ? '/' : seo.canonicalPath}`;

    document.title = seo.title;

    ensureMetaByName('description').setAttribute('content', seo.description);
    ensureLink('canonical').setAttribute('href', canonicalUrl);

    ensureMetaByProperty('og:type').setAttribute('content', 'website');
    ensureMetaByProperty('og:site_name').setAttribute('content', 'SoftivaIT');
    ensureMetaByProperty('og:title').setAttribute('content', seo.title);
    ensureMetaByProperty('og:description').setAttribute('content', seo.description);
    ensureMetaByProperty('og:url').setAttribute('content', canonicalUrl);
    ensureMetaByProperty('og:image').setAttribute('content', seo.image);

    ensureMetaByName('twitter:card').setAttribute('content', 'summary_large_image');
    ensureMetaByName('twitter:title').setAttribute('content', seo.title);
    ensureMetaByName('twitter:description').setAttribute('content', seo.description);
    ensureMetaByName('twitter:image').setAttribute('content', seo.image);
  }, [pathname]);

  return null;
}

