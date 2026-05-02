import React, { useState, useMemo, useEffect } from 'react';

interface Post {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  content?: React.ReactNode;
  published: boolean;
}

const idpGuideContent = (
    <div className="space-y-4 text-lg text-neutral-700 leading-relaxed prose prose-lg max-w-none">
        <p>Every organization lives on documents. Contracts, invoices, insurance claims, shipping notes and HR forms are the lifeblood of business, yet most of the information inside them is unstructured. Valuable data lives in many file types like PDFs, Word documents, email and all these are not easily usable. Roughly 80% of enterprise information is trapped in these unstructured documents. That means armies of people are still copying and pasting, introducing errors, slowing processes and driving up costs.</p>
        
        <h3>This problem cuts across industries:</h3>
        <div className="space-y-2 mt-2">
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[1]</span>
                <p><strong>Banks and insurers</strong> waste hours reconciling claims, policies and statements.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[2]</span>
                <p><strong>Healthcare providers</strong> drown in patient forms and clinical notes.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[3]</span>
                <p><strong>Manufacturers and logistics firms</strong> struggle with bills of lading, customs forms and invoices.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[4]</span>
                <p><strong>Educational institutions</strong> still manage student records and certificates manually.</p>
            </div>
        </div>
        <p>In every case, valuable time and money are lost because the data inside documents cannot flow freely into digital systems.</p>
        
        <h3>Intelligent Document Processing (IDP) tackles this head-on. It combines multiple technologies:</h3>
        <div className="space-y-2 mt-2">
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[1]</span>
                <p><strong>Optical Character Recognition (OCR)</strong> - Turns scanned images into machine readable text.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[2]</span>
                <p><strong>Natural Language Processing (NLP)</strong> - Interprets meaning from sentences and fields.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[3]</span>
                <p><strong>Machine Learning & Deep Learning</strong> - Train models to recognize patterns and adapt to new document types.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[4]</span>
                <p><strong>Validation & Human-in-the-Loop</strong> - Ensure tricky cases get reviewed and models keep improving.</p>
            </div>
        </div>
        <p>Together these steps classify incoming documents, extract key information like names, dates, amounts or tables, validate them against business rules and then integrate the structured output into downstream systems such as ERP, CRM or workflow tools.</p>
        
        <h3>When done right, IDP delivers tangible results:</h3>
        <div className="space-y-2 mt-2">
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[1]</span>
                <p><strong>Speed</strong> - Processes that once took days shrink to minutes.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[2]</span>
                <p><strong>Accuracy</strong> - AI agents learn and adapt, often surpassing human accuracy on specialized forms.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[3]</span>
                <p><strong>Scalability</strong> - Handle millions of documents without adding headcount.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[4]</span>
                <p><strong>Compliance</strong> - Ensure data is captured consistently and audit trails are maintained.</p>
            </div>
            <div className="flex">
                <span className="font-semibold w-10 flex-shrink-0">[5]</span>
                <p><strong>Employee Satisfaction</strong> - Free people from repetitive copy paste work so they can focus on higher value tasks.</p>
            </div>
        </div>
        
        <p>The volume of business documents continues to grow, while customer expectations for speed and accuracy rise. Legacy capture tools can’t keep up. Intelligent Document Processing is no longer a “nice to have” but a competitive necessity. It unlocks 80% of enterprise knowledge that has been hidden, making it usable, shareable and actionable.</p>
    </div>
);

const allPosts: Post[] = [
  { 
    title: 'What is Intelligent Document Processing (IDP)?', 
    author: 'SoftivaIT Team', 
    date: 'September 01, 2024',
    excerpt: 'A foundational overview of IDP, its components, and why it matters for modern businesses.',
    image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=600&h=400&fit=crop&q=80',
    category: 'IDP Guides',
    content: idpGuideContent,
    published: true,
  },
  { 
    title: 'OCR vs. ICR vs. IDP: Understanding the Key Differences', 
    author: 'SoftivaIT Team', 
    date: 'Coming Soon',
    excerpt: 'Demystifying the acronyms and exploring the evolution of document capture technologies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    category: 'IDP Guides',
    published: false,
  },
  { 
    title: 'How to Choose the Right IDP Solution for Your Business', 
    author: 'SoftivaIT Team', 
    date: 'Coming Soon',
    excerpt: 'A practical guide with key criteria to consider when evaluating and selecting an IDP vendor or platform.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80',
    category: 'IDP Guides',
    published: false,
  },
  { 
    title: 'The Role of AI Agents in Next-Generation IDP', 
    author: 'SoftivaIT Team', 
    date: 'Coming Soon',
    excerpt: 'Learn how agentic AI is transforming document processing from simple data extraction to autonomous workflow execution.',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop&q=80',
    category: 'IDP Guides',
    published: false,
  },
  { 
    title: 'Top 5 Challenges in Invoice Processing and How AI Solves Them', 
    author: 'Neha Gupta', 
    date: 'July 28, 2024', 
    excerpt: 'From matching purchase orders to handling exceptions, invoice processing is fraught with challenges. Learn how intelligent automation brings efficiency and accuracy...', 
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&h=400&fit=crop&q=80',
    category: 'Industry Insights',
    published: true,
    content: <p>From matching purchase orders to handling exceptions, invoice processing is fraught with challenges. Learn how intelligent automation brings efficiency and accuracy...</p>,
  },
  { 
    title: 'Unlocking Value in Unstructured Data: A Guide for the Healthcare Industry', 
    author: 'Vikram Patel', 
    date: 'July 05, 2024', 
    excerpt: 'Patient records, lab reports, and clinical notes contain a wealth of information. Discover how IDP can structure this data to improve patient outcomes...', 
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80',
    category: 'Industry Insights',
    published: true,
    content: <p>Patient records, lab reports, and clinical notes contain a wealth of information. Discover how IDP can structure this data to improve patient outcomes...</p>,
  },
  {
    title: 'A Deep Dive into Our Hybrid Solutions Model',
    author: 'Mohit Jain',
    date: 'June 20, 2024',
    excerpt: 'Learn how we combine the best of traditional IDP platforms with custom-built AI agents to deliver maximum ROI for our clients.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop&q=80',
    category: 'AI & Automation',
    published: true,
    content: <p>Learn how we combine the best of traditional IDP platforms with custom-built AI agents to deliver maximum ROI for our clients.</p>,
  },
  {
    title: 'Calculating the True Cost of Manual Document Processing',
    author: 'Indu Sahu',
    date: 'June 01, 2024',
    excerpt: 'Beyond salaries, the hidden costs of manual data entry include errors, delays, and missed opportunities. We break down the real impact on your bottom line.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=600&h=400&fit=crop&q=80',
    category: 'Industry Insights',
    published: true,
    content: <p>Beyond salaries, the hidden costs of manual data entry include errors, delays, and missed opportunities. We break down the real impact on your bottom line.</p>,
  },
];

const BlogInsightsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All Posts');
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const categories = useMemo(() => {
        const allCategories = allPosts.map(p => p.category);
        return ['All Posts', ...Array.from(new Set(allCategories))];
    }, []);

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'All Posts') {
            return allPosts;
        }
        return allPosts.filter(p => p.category === activeCategory);
    }, [activeCategory]);
    
    const featuredPost = useMemo(() => {
        return filteredPosts.find(p => p.published) || null;
    }, [filteredPosts]);
    
    const otherPosts = useMemo(() => {
        const publishedPosts = filteredPosts.filter(p => p.published);
        const startIndex = publishedPosts.findIndex(p => p.title === featuredPost?.title);
        if (startIndex !== -1) {
            publishedPosts.splice(startIndex, 1);
        }
        return publishedPosts.concat(filteredPosts.filter(p => !p.published));
    }, [filteredPosts, featuredPost]);

    useEffect(() => {
      if (selectedPost) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return () => { document.body.style.overflow = 'auto' };
    }, [selectedPost]);

  return (
    <div className="bg-neutral-100 min-h-screen">
        <section className="relative bg-gradient-to-br from-primary via-blue-400 to-blue-800 text-white overflow-hidden pb-3">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-8 backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                    Resources
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                    Blog & Insights
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Stay updated with the latest news, industry trends, and expert insights from the world of AI and document automation.
                </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="white">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
            </div>
        </section>
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
                                activeCategory === category 
                                ? 'bg-primary text-white' 
                                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredPosts.length === 0 ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-neutral-800">No posts found</h2>
                        <p className="mt-2 text-lg text-neutral-600">There are no posts in this category yet. Check back soon!</p>
                    </div>
                ) : (
                  <>
                    {featuredPost && (
                        <div className="mb-16" onClick={() => setSelectedPost(featuredPost)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-neutral-50 rounded-2xl p-4 border border-transparent hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover rounded-lg shadow-md" />
                                <div className="p-2 md:p-6">
                                    <p className="text-primary font-semibold text-sm mb-2">{featuredPost.category}</p>
                                    <h2 className="text-3xl font-bold text-neutral-900 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                                    <p className="mt-3 text-sm text-neutral-500">{featuredPost.author} &bull; {featuredPost.date}</p>
                                    <p className="mt-4 text-neutral-600 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                                    <p className="mt-6 text-primary font-bold">Read more &rarr;</p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherPosts.map((post, index) => (
                            <div 
                              key={index} 
                              onClick={() => post.published && setSelectedPost(post)}
                              className={`bg-white border border-neutral-200 rounded-lg overflow-hidden flex flex-col relative ${post.published ? 'group cursor-pointer hover:border-primary hover:shadow-lg' : 'opacity-60 bg-neutral-50'} transition-all duration-300`}
                            >
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-primary font-semibold text-sm mb-2">{post.category}</p>
                                    <h3 className={`text-xl font-bold ${post.published ? 'text-neutral-900 group-hover:text-primary' : 'text-neutral-600'} transition-colors`}>{post.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-500">{post.author} &bull; {post.date}</p>
                                    <p className="mt-4 text-neutral-600 flex-grow">{post.excerpt}</p>
                                    {post.published && <p className="mt-6 text-primary font-semibold">Read more &rarr;</p>}
                                </div>
                                {!post.published && (
                                  <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                                    COMING SOON
                                  </div>
                                )}
                            </div>
                        ))}
                    </div>
                  </>
                )}
            </div>
        </div>

        {selectedPost && (
          <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedPost(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPost(null)} 
                className="sticky top-4 right-4 float-right p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 z-10 transition-colors"
                aria-label="Close article"
              >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-t-2xl" />
              <div className="p-8 md:p-12">
                <p className="text-primary font-semibold mb-2">{selectedPost.category}</p>
                <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">{selectedPost.title}</h1>
                <p className="mt-4 text-sm text-neutral-500">{selectedPost.author} &bull; {selectedPost.date}</p>
                <div className="mt-8 border-t border-neutral-200 pt-8">
                  {selectedPost.content ? selectedPost.content : <p className="text-lg text-neutral-700 leading-relaxed">{selectedPost.excerpt}</p>}
                </div>
              </div>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
                .animate-slide-up { animation: slide-up 0.3s ease-out; }
            `}</style>
          </div>
        )}
    </div>
  );
};

export default BlogInsightsPage;