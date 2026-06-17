export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
    | { type: "stat"; value: string; label: string }
    | { type: "table"; headers: string[]; rows: string[][] }
    | { type: "image"; url: string; alt: string; caption?: string }
    | { type: "youtube"; videoId: string; title: string }
  >;
}

export const posts: BlogPost[] = [
  {
    slug: "how-to-earn-money-selling-ebooks-in-india",
    title: "How to Earn Money Selling eBooks in India (2026 Beginner's Guide)",
    description: "A practical, step-by-step guide to writing, pricing, and selling your first eBook in India — even if you're starting from zero followers.",
    date: "2026-06-01",
    readingMinutes: 10,
    tags: ["earn with ebooks", "beginners", "india"],
    body: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
        alt: "Person writing and earning money from ebooks in India",
        caption: "Thousands of Indian creators are building income with digital products"
      },
      { type: "p", text: "In 2022, Priya Sharma was a 24-year-old teacher in Pune earning ₹18,000 a month. By 2024, she was making ₹60,000 a month — from a single 40-page PDF she wrote in two weekends. No startup funding. No Instagram fame. Just one eBook about teaching English to rural students, sold quietly through WhatsApp and a simple landing page." },
      { type: "p", text: "This is not a fantasy. India's digital content market crossed ₹25,000 crore in 2025, and the fastest-growing slice of it is individual creators selling their own knowledge as eBooks. The playbook is simpler than the internet makes it sound — and this guide gives you all of it." },
      { type: "stat", value: "₹25,000 Cr+", label: "India's digital content market in 2025" },
      { type: "h2", text: "Why eBooks beat every other side hustle in India" },
      { type: "p", text: "Dropshipping needs inventory. Freelancing trades time for money. YouTube takes 12 months to monetise. eBooks are different — you create once, sell forever, and UPI makes instant delivery effortless." },
      {
        type: "table",
        headers: ["Side Hustle", "Startup Cost", "Time to First ₹", "Scales?"],
        rows: [
          ["Dropshipping", "₹10,000+", "1–3 months", "Hard"],
          ["Freelancing", "₹0", "1–2 weeks", "No (time-bound)"],
          ["YouTube", "₹5,000+", "12+ months", "Yes"],
          ["eBook", "₹0", "3–7 days", "Yes — infinitely"],
        ]
      },
      { type: "h2", text: "Watch: How to sell eBooks online in India" },
      {
        type: "youtube",
        videoId: "5QxaetDrTaE",
        title: "How to Sell eBooks Online in India — Complete Guide"
      },
      { type: "h2", text: "Step 1 — Pick a niche people are already paying for" },
      { type: "p", text: "The biggest mistake new creators make is writing what they want to write, not what the market wants to buy. Before you type a single word, validate your idea with this simple test: search your topic on Instagram Reels. If creators are posting about it and getting saves and comments, people want it. If nobody is posting about it, there's no market." },
      { type: "quote", text: "Don't write a book about life. Write a book that solves one painful, specific problem. The best eBook titles finish this sentence: 'This helps ___ do ___ in ___ days.'" },
      { type: "h2", text: "Step 2 — Write a 30–50 page eBook in one weekend" },
      { type: "p", text: "Your first eBook should not be a masterpiece. It should be a solution. Aim for 30–50 pages of pure, actionable content. Use ChatGPT to outline your chapters in 10 minutes, then write each chapter in your own voice. Most creators spend two evenings, not two months. Done beats perfect every time." },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&auto=format&fit=crop",
        alt: "Writing an ebook on laptop",
        caption: "You only need a laptop and your knowledge to create your first eBook"
      },
      {
        type: "ul",
        items: [
          "Chapter 1 — The problem your reader is stuck at right now",
          "Chapters 2–6 — One step per chapter, simple and actionable",
          "Final chapter — What success looks like + what to do next",
          "Bonus page — Link to your next product or community",
        ]
      },
      { type: "h2", text: "Step 3 — Price it for maximum conversions" },
      {
        type: "table",
        headers: ["Price Point", "Best For", "Conversion"],
        rows: [
          ["₹49–₹99", "Free lead magnet", "High but low value"],
          ["₹199–₹299", "First eBook impulse buy", "Best for beginners"],
          ["₹499–₹799", "Bundle with templates", "Strong with warm audience"],
          ["₹999–₹2,499", "Premium vault", "Lower but high revenue"],
        ]
      },
      { type: "h2", text: "Step 4 — Get your first 10 sales without any followers" },
      {
        type: "ul",
        items: [
          "WhatsApp Status — Post 'just launched' to your contacts. Most creators get 5–8 sales from people they already know.",
          "Instagram Reels — 3 short videos sharing one tip from your eBook. End with 'comment EBOOK and I'll DM you the link.'",
          "Quora answers — Find questions in your niche, write helpful answers, drop your eBook link as a resource.",
          "Facebook groups — Join 3–5 groups in your niche, add value for a week, then mention your eBook.",
          "DM your first buyers personally — Ask for feedback and a testimonial.",
        ]
      },
      { type: "stat", value: "72%", label: "of Indian digital purchases happen via UPI — frictionless buying" },
      { type: "quote", text: "You don't need 10,000 followers. You need 100 people with a problem you can solve for ₹299." },
      { type: "h2", text: "The fastest way to launch this month" },
      { type: "p", text: "The Pustika Pro Vault gives you the AI prompts, proven niche list, headline formulas, and 30-day launch checklist that top Indian creators use. Everything you need to go from idea to first sale — without months of trial and error." },
    ],
  },
  {
    slug: "best-ebook-niches-2026",
    title: "10 Best eBook Niches to Sell in India in 2026 (With Real Demand Data)",
    description: "The most profitable eBook niches for Indian creators in 2026 — what's selling, what's saturated, and how to pick a category that pays for years.",
    date: "2026-05-20",
    readingMinutes: 8,
    tags: ["niches", "earn with ebooks", "research"],
    body: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
        alt: "Indian creator researching ebook niches on laptop",
        caption: "The right niche is 80% of your eBook's success"
      },
      { type: "p", text: "Most niche advice you'll find online is written for American or European markets. Indian buyers are different — different aspirations, different pain points, different price sensitivity. After analysing hundreds of Indian digital product creators, here are the 10 niches actually generating consistent sales in India right now." },
      { type: "stat", value: "4.2x", label: "growth in Indian digital product sales from 2023 to 2025" },
      { type: "h2", text: "The #1 rule before picking your niche" },
      { type: "p", text: "Profitability follows pain. The niches that sell best are not the ones you're most passionate about — they're the ones where people are actively suffering and desperately searching for answers. Your job is to find that pain, package the solution, and put a price on it." },
      { type: "h2", text: "The 10 niches winning in India right now" },
      {
        type: "table",
        headers: ["Niche", "Demand", "Competition", "Best Price"],
        rows: [
          ["Personal finance for Indians", "🔥 Very High", "Medium", "₹299–₹599"],
          ["AI productivity & prompts", "🔥 Very High", "Low–Medium", "₹199–₹499"],
          ["Career switching & resume hacks", "🔥 High", "Low", "₹299–₹799"],
          ["Health & Indian diet plans", "⚡ High", "Medium", "₹199–₹499"],
          ["Instagram & content growth", "⚡ High", "High", "₹299–₹699"],
          ["Freelancing (Fiverr/Upwork)", "⚡ High", "Medium", "₹399–₹799"],
          ["Faceless YouTube business", "📈 Growing", "Low", "₹499–₹999"],
          ["Relationships & communication", "📈 Growing", "Low", "₹199–₹399"],
          ["Study guides & exam prep", "📈 Growing", "Medium", "₹99–₹299"],
          ["Faith, habits & morning routines", "📈 Steady", "Low", "₹199–₹399"],
        ]
      },
      { type: "h2", text: "Watch: Best niches for digital products in India" },
      {
        type: "youtube",
        videoId: "cruRNLF7GZ8",
        title: "How to Sell Digital Products Online in India — Niche Research Guide"
      },
      { type: "h2", text: "Deep dive — top 3 niches for beginners" },
      { type: "h2", text: "1. Personal Finance for Indians" },
      { type: "p", text: "Every Indian under 35 is anxious about money but nobody taught them how to manage it. Topics like 'how to invest your first ₹1,000,' 'how to get out of credit card debt,' and 'tax saving for salaried employees' generate massive search volume. The audience is enormous and the trust barrier is low if you speak plainly and practically." },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
        alt: "Personal finance planning India",
        caption: "Personal finance is the #1 searched topic among Indian millennials"
      },
      { type: "h2", text: "2. AI Productivity" },
      { type: "p", text: "ChatGPT changed everything. Students, professionals, and small business owners all want to use AI but don't know how. An eBook titled '50 ChatGPT Prompts for MBA Students' or 'How to Use AI to Write Your Resume in 30 Minutes' can sell hundreds of copies with almost zero competition from serious creators." },
      { type: "h2", text: "3. Career Switching" },
      { type: "p", text: "India has millions of people stuck in jobs they hate, desperately wanting to switch — to IT, to freelancing, to content creation. A specific guide like 'How to Switch from Teaching to UX Design in 6 Months' solves a real, urgent, painful problem. These buyers are highly motivated and convert fast." },
      { type: "h2", text: "What to avoid in 2026" },
      {
        type: "ul",
        items: [
          "Generic self-help — 'How to be happy' competes with every bestselling book ever written.",
          "Crypto trading shortcuts — buyer trust collapsed after 2022 and has not recovered.",
          "Generic AI tools lists — thousands of these exist and none sell well anymore.",
          "Any niche where you have zero personal experience — readers feel inauthenticity instantly.",
        ]
      },
      { type: "quote", text: "The best niche is not the most popular one. It's the one where your personal story makes you the most credible voice in the room." },
    ],
  },
  {
    slug: "how-to-price-your-ebook",
    title: "How to Price Your eBook in India (The Psychology Behind ₹199, ₹499 and ₹999)",
    description: "A no-fluff pricing framework for digital eBooks in India — anchor prices, bundle tiers, and the psychology that makes buyers click without hesitation.",
    date: "2026-05-05",
    readingMinutes: 7,
    tags: ["pricing", "earn with ebooks"],
    body: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
        alt: "Pricing strategy for digital products India",
        caption: "Pricing is not math — it's psychology"
      },
      { type: "p", text: "Here is a true story. A creator launched her eBook at ₹49, sold 12 copies in a month, and felt like a failure. She raised the price to ₹349, rewrote the sales page headline, and sold 47 copies in the first week. Same PDF. Same content. Completely different result. The only thing that changed was the price — and what it signalled to buyers." },
      { type: "p", text: "Pricing is not math. It is psychology. And in India's digital product market, getting it wrong is the single biggest reason good eBooks fail silently." },
      { type: "h2", text: "The psychology of price perception in India" },
      { type: "p", text: "Indian buyers are not cheap — they are value-conscious. A ₹49 eBook triggers the thought: 'This must not be very good.' A ₹499 eBook triggers: 'This creator takes their work seriously.' The content inside could be identical. The price is the first signal of quality before a single word is read." },
      { type: "stat", value: "3.9x", label: "average revenue increase when creators move from ₹49 to ₹299 pricing" },
      { type: "h2", text: "Watch: How to price your digital product" },
      {
        type: "youtube",
        videoId: "MGKkeDF_u5Q",
        title: "How to Create and Sell eBooks via Razorpay in India — Pricing Walkthrough"
      },
      { type: "h2", text: "The 3-tier pricing ladder every creator needs" },
      {
        type: "table",
        headers: ["Tier", "Price Range", "What to Include", "Goal"],
        rows: [
          ["Entry", "₹199–₹299", "Core eBook (30–50 pages)", "Impulse buy, first sale"],
          ["Mid", "₹499–₹799", "eBook + templates + checklist", "Higher order value"],
          ["Premium", "₹999–₹2,499", "Full vault — multiple eBooks, prompts, community", "Maximum revenue per buyer"],
        ]
      },
      { type: "h2", text: "The anchor pricing trick that doubles conversions" },
      { type: "p", text: "Never show your price without showing a higher 'original' price first. This is called anchoring and it is the single most effective pricing tactic in digital products. Your brain does not evaluate price in isolation — it evaluates price relative to a reference point." },
      { type: "quote", text: "'Originally ₹1,999 — today ₹499.' That contrast makes the buy button feel like a steal, not a stretch. Without the anchor, ₹499 feels expensive. With it, ₹499 feels like a gift." },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
        alt: "Digital payment UPI India ecommerce",
        caption: "72% of Indian digital purchases happen via UPI — making impulse buying effortless"
      },
      { type: "h2", text: "When to raise your price" },
      {
        type: "ul",
        items: [
          "After your first 10 sales — you now have proof it sells.",
          "After your first 3 testimonials — social proof justifies a higher price.",
          "When you add bonus material — templates, checklists, or a second eBook.",
          "When you start running paid ads — higher margins protect your ad spend.",
          "Never lower your price as a first response to slow sales — fix the headline first.",
        ]
      },
      { type: "stat", value: "₹297", label: "consistently outperforms ₹300 in Indian digital product split tests" },
    ],
  },
  {
    slug: "promote-your-ebook-without-an-audience",
    title: "How to Promote Your eBook Without an Audience (5 Free Channels That Actually Work)",
    description: "You don't need followers to sell eBooks. Five free, repeatable promotion channels that work for first-time creators in India.",
    date: "2026-04-18",
    readingMinutes: 9,
    tags: ["marketing", "earn with ebooks"],
    body: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
        alt: "Instagram reels promotion strategy India",
        caption: "You don't need followers to make your first sale — you need the right channels"
      },
      { type: "p", text: "Rahul launched his first eBook in January 2025 with 340 Instagram followers. By March he had made ₹38,000 in sales. He did not go viral. He did not run ads. He used five free channels systematically, and he did not stop after the first week when sales were slow. This guide breaks down exactly what he did." },
      { type: "stat", value: "₹38,000", label: "earned in 60 days with 340 followers — using only free channels" },
      { type: "h2", text: "The mindset shift that changes everything" },
      { type: "p", text: "Most creators wait until they have an audience to launch. This is backwards. You build an audience by putting something out in the world — a product, a point of view, a result. The audience follows proof, not potential. Launch first. Build second." },
      { type: "quote", text: "Waiting until you have 10,000 followers to launch is like waiting until you're fit to start going to the gym. Start with what you have. The results build the momentum." },
      { type: "h2", text: "Watch: How to promote your eBook with zero budget" },
      {
        type: "youtube",
        videoId: "GJ4nZwLkx2s",
        title: "eBook Marketing Strategies in Hindi — How to Sell More eBooks"
      },
      { type: "h2", text: "Channel 1 — WhatsApp (your fastest first sales)" },
      { type: "p", text: "Your WhatsApp contacts already trust you. That trust is worth more than 10,000 cold Instagram followers. Post a simple WhatsApp Status: 'I just finished something I'm really proud of — my first eBook on [topic]. Early bird price for 48 hours only. DM me if you want it.' Most first-time creators get 5–15 sales from this alone within 24 hours." },
      {
        type: "ul",
        items: [
          "Post on WhatsApp Status every day for the first week.",
          "Create a broadcast list of 50–100 people who might benefit from your topic.",
          "Follow up personally with everyone who views your status — personal outreach converts at 30–40%.",
          "Ask your first buyers to share with one person who might also benefit.",
        ]
      },
      { type: "h2", text: "Channel 2 — Instagram Reels" },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop",
        alt: "Creating Instagram reels for ebook promotion",
        caption: "3 Reels per week consistently beats going viral once"
      },
      {
        type: "table",
        headers: ["Reel Type", "Goal", "CTA"],
        rows: [
          ["Problem hook Reel", "Reach new audience", "Comment EBOOK for the link"],
          ["Tip from your eBook", "Build credibility", "Full guide in bio link"],
          ["Your personal story", "Build trust", "DM me if this resonates"],
          ["Before/after result", "Trigger desire", "Link in bio to get started"],
        ]
      },
      { type: "h2", text: "Channel 3 — Quora and Reddit" },
      { type: "p", text: "Find 10 questions on Quora in your niche that have been viewed more than 5,000 times. Write genuinely helpful, detailed answers. At the end, mention your eBook as 'a deeper resource.' Quora answers rank on Google for years. One good answer can send you buyers every month for three years without any additional work." },
      { type: "h2", text: "Channel 4 — YouTube Shorts" },
      { type: "p", text: "YouTube aggressively promotes Shorts from new channels in 2026. The same content you make for Reels works as Shorts. Upload the same video to both platforms and double your reach with zero extra effort. YouTube Shorts also appear in Google search results — double SEO benefit." },
      { type: "h2", text: "Channel 5 — Facebook Groups" },
      { type: "p", text: "While everyone fights for attention on Instagram, Facebook Groups are full of highly engaged buyers in every nicniche. Join 5 groups in your niche. Spend the first week adding genuine value. Then mention your eBook when relevant. Group members convert at 2–3x the rate of cold social media audiences." },
      { type: "stat", value: "2–3x", label: "higher conversion from Facebook Group audiences vs cold social traffic" },
      {
        type: "table",
        headers: ["Day", "Action"],
        rows: [
          ["Day 1", "WhatsApp Status + personal DMs to 20 contacts"],
          ["Day 2–3", "Post first Instagram Reel + answer 3 Quora questions"],
          ["Day 4–5", "Join 3 Facebook Groups, start adding value"],
          ["Day 6–7", "Upload Reels to YouTube Shorts + follow up on DMs"],
          ["Week 2+", "Repeat — 3 Reels/week, 2 Quora answers/week, daily WhatsApp Status"],
        ]
      },
      { type: "quote", text: "Consistency for 30 days beats viral moments every time. Show up every day for one month and your results will surprise you." },
    ],
  },
  {
    slug: "digital-products-india-2026",
    title: "7 Best Digital Products to Sell in India in 2026 (And How to Start This Week)",
    description: "The most profitable digital products Indian creators are selling in 2026 — with real income numbers, zero inventory, and a clear starting point for each.",
    date: "2026-06-17",
    readingMinutes: 11,
    tags: ["digital products", "passive income", "india", "beginners"],
    body: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&auto=format&fit=crop",
        alt: "Indian creator selling digital products online from laptop",
        caption: "In 2026, the best businesses have no warehouse, no shipping, and no staff"
      },
      { type: "p", text: "Arjun was a 27-year-old graphic designer from Ahmedabad earning ₹22,000 a month doing client work. He was talented, hardworking, and completely exhausted. Every rupee he earned required him to show up, deliver, and repeat. Then in October 2024, he packaged his Canva template designs into a ₹399 digital product. In three months, he made ₹71,000 from that one product — without a single client call. Same skill. Different model." },
      { type: "p", text: "Digital products are the most powerful income model available to Indian creators today. No inventory. No shipping. No middlemen taking 35% cuts. You create once, and the product sells while you sleep, study, travel, or work your day job. This guide covers the 7 best digital products to sell in India in 2026 — with real numbers, real niches, and a clear starting point for each." },
      { type: "stat", value: "$135B+", label: "Global digital products market size in 2025 — India is the fastest growing slice" },
      { type: "h2", text: "What makes digital products perfect for Indian creators" },
      { type: "p", text: "Before we dive into the list, understand why this model works so well in India specifically. UPI has made impulse buying frictionless — someone sees your product at 11pm, pays ₹299 in 10 seconds, and gets instant delivery. No card details, no waiting, no friction. This buying behaviour is unique to India and it massively favours digital product sellers." },
      {
        type: "table",
        headers: ["Model", "Startup Cost", "Profit Margin", "Scales Without You?"],
        rows: [
          ["Physical products", "₹50,000+", "20–40%", "Hard"],
          ["Freelancing", "₹0", "100%", "No"],
          ["Dropshipping", "₹10,000+", "15–25%", "Somewhat"],
          ["Digital products", "₹0", "100%", "Yes — infinitely"]
        ]
      },
      { type: "h2", text: "Watch: How to earn in lakhs selling digital products in India" },
      { type: "youtube", videoId: "ecoIjzZRJbY", title: "How to Earn in Lakhs by Selling Digital Products — Step by Step Guide in Hindi" },
      { type: "h2", text: "1. eBooks — the fastest product to launch" },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
        alt: "eBooks digital publishing India",
        caption: "An eBook takes one weekend to create and can sell for years"
      },
      { type: "p", text: "eBooks remain the single easiest digital product to create and sell in India. You need no design skills, no recording equipment, and no technical knowledge. A 30–50 page PDF written in Google Docs, designed in Canva, and sold through Razorpay is a complete, profitable business. The Indian market has strong demand for eBooks on personal finance, career growth, AI productivity, fitness, and relationships." },
      { type: "ul", items: ["Time to create: 1–2 weekends", "Ideal price point: ₹199–₹499", "Best platforms: Your own website, Razorpay payment links, Instagram DMs", "Top niches: Personal finance, career switching, AI prompts, fitness, parenting"] },
      { type: "quote", text: "The best eBook is not the most comprehensive one. It's the one that solves one specific, painful problem for one specific person — in the clearest possible way." },
      { type: "h2", text: "2. Canva Templates — sell your design skills forever" },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop",
        alt: "Canva templates digital products India creator",
        caption: "One template pack can sell hundreds of times with zero extra effort"
      },
      { type: "p", text: "Every small business owner, coach, and content creator in India needs professional-looking social media posts, pitch decks, and resumes — but most can't afford a designer and can't design themselves. Canva templates solve this perfectly. You design once in Canva, share a template link, and charge ₹199–₹999 per pack. Instagram post templates, YouTube thumbnail packs, and business proposal templates are selling extremely well in 2026." },
      { type: "stat", value: "190M+", label: "Canva users worldwide — millions actively buying templates" },
      { type: "h2", text: "3. AI Prompt Packs — the hottest new category in India" },
      { type: "p", text: "This is the most underserved niche in India right now. Every student, professional, and business owner wants to use ChatGPT and Gemini effectively — but they don't know how to write good prompts. A well-curated pack of 50–100 prompts for a specific use case can be created in a day and sold for ₹149–₹499. Competition is almost zero among serious Indian creators." },
      { type: "ul", items: ["50 ChatGPT prompts for MBA students — ₹199", "100 Instagram caption prompts for Indian businesses — ₹249", "AI prompts for teachers and educators — ₹299", "ChatGPT prompts for job seekers and resume writing — ₹199"] },
      { type: "h2", text: "4. Online Courses — highest revenue per sale" },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
        alt: "Online course creator India laptop recording",
        caption: "Online courses command 5–10x the price of eBooks on the same topic"
      },
      { type: "p", text: "Online courses take more effort to create but command dramatically higher prices. A course that teaches the same content as a ₹299 eBook can sell for ₹2,999–₹9,999. Indian creators are building profitable courses on everything from stock market investing to spoken English to freelancing on Fiverr. You don't need Udemy — a simple video series delivered via Google Drive works perfectly for the Indian market." },
      { type: "stat", value: "₹9,000 Cr+", label: "India's online learning market in 2025" },
      { type: "h2", text: "5. Digital Planners and Notion Templates" },
      { type: "p", text: "Notion has exploded in India among students, founders, and productivity-obsessed professionals. A well-designed Notion template for project management, content planning, or personal finance tracking can sell for ₹199–₹799. PDF planners — daily planners, habit trackers, business plan templates — also sell consistently well on Instagram and through direct DMs." },
      { type: "h2", text: "6. Stock Photos and Digital Art" },
      { type: "p", text: "If you have a decent smartphone camera, you're sitting on a product. Indian stock photos — real streets, real people, real food, real festivals — are massively underrepresented on global stock sites. Indian businesses, bloggers, and marketers are desperately searching for authentic Indian visual content. Upload to Shutterstock, Adobe Stock, or sell directly through your own site." },
      { type: "h2", text: "7. Printables and Worksheets" },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop",
        alt: "Digital printables worksheets India",
        caption: "Printables are the most passive of all digital products — design once, sell forever"
      },
      { type: "p", text: "Printables are PDF files people download and print at home — meal planners, budgeting sheets, study timetables, wedding checklists, kids activity sheets. They sell for ₹49–₹299 and require almost zero effort to create. Bundling 5–10 related printables into a pack at ₹499 creates strong value perception and higher average order value." },
      { type: "h2", text: "Which digital product should YOU start with?" },
      {
        type: "table",
        headers: ["Your Background", "Best First Product", "Expected First Month"],
        rows: [
          ["Writer / Teacher / Expert", "eBook", "₹5,000–₹25,000"],
          ["Designer / Creative", "Canva Templates", "₹8,000–₹30,000"],
          ["Tech / AI enthusiast", "AI Prompt Pack", "₹3,000–₹15,000"],
          ["Coach / Trainer", "Online Course", "₹15,000–₹75,000"],
          ["Photographer", "Stock Photos", "₹2,000–₹10,000"]
        ]
      },
      { type: "h2", text: "Watch: 15 digital products to sell for passive income" },
      { type: "youtube", videoId: "zy5tOkKAPbM", title: "15 Best Digital Products to Sell Online — Passive Income Ideas" },
      { type: "quote", text: "Your knowledge is worth more than you think. Someone out there is struggling with exactly what you've already figured out. Package that solution. Price it fairly. Put it in front of them. That's the entire business." },
      { type: "p", text: "The Pustika Pro Vault gives you the exact templates, AI prompts, niche research, and 30-day launch checklist to go from idea to first sale — without months of guesswork. Everything you need is already inside." }
    ]
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
