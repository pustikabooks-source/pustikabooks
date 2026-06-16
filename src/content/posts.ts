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
    description:
      "A practical, step-by-step guide to writing, pricing, and selling your first eBook in India — even if you're starting from zero followers.",
    date: "2026-06-01",
    readingMinutes: 10,
    tags: ["earn with ebooks", "beginners", "india"],
    body: [
      {
  type: "image",
  url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop",
  alt: "Person working on laptop earning money online India",
  caption: "Thousands of Indian creators are building income with digital products"
},
      {
        type: "p",
        text: "In 2022, Priya Sharma was a 24-year-old teacher in Pune earning ₹18,000 a month. By 2024, she was making ₹60,000 a month — from a single 40-page PDF she wrote in two weekends. No startup funding. No Instagram fame. Just one eBook about teaching English to rural students, sold quietly through WhatsApp and a simple landing page.",
      },
      {
        type: "p",
        text: "This is not a fantasy. India's digital content market crossed ₹25,000 crore in 2025, and the fastest-growing slice of it is individual creators selling their own knowledge as eBooks. The playbook is simpler than the internet makes it sound — and this guide gives you all of it.",
      },
      {
        type: "stat",
        value: "₹25,000 Cr+",
        label: "India's digital content market in 2025",
      },
      {
        type: "h2",
        text: "Why eBooks beat every other side hustle in India",
      },
      {
        type: "p",
        text: "Dropshipping needs inventory. Freelancing trades time for money. YouTube takes 12 months to monetise. eBooks are different — you create once, sell forever, and UPI makes instant delivery effortless.",
      },
      {
        type: "table",
        headers: ["Side Hustle", "Startup Cost", "Time to First ₹", "Scales?"],
        rows: [
          ["Dropshipping", "₹10,000+", "1–3 months", "Hard"],
          ["Freelancing", "₹0", "1–2 weeks", "No (time-bound)"],
          ["YouTube", "₹5,000+", "12+ months", "Yes"],
          ["eBook", "₹0", "3–7 days", "Yes — infinitely"],
        ],
      },
      {
        type: "h2",
        text: "Step 1 — Pick a niche that people are already paying for",
      },
      {
        type: "p",
        text: "The biggest mistake new creators make is writing what they want to write, not what the market wants to buy. Before you type a single word, validate your idea with this simple test: search your topic on Instagram Reels. If creators are posting about it and getting saves and comments, people want it. If nobody is posting about it, there's no market.",
      },
      {
        type: "quote",
        text: "Don't write a book about life. Write a book that solves one painful, specific problem. The best eBook titles finish this sentence: 'This helps ___ do ___ in ___ days.'",
      },
      {
        type: "h2",
        text: "Step 2 — Write a 30–50 page eBook in one weekend",
      },
      {
        type: "p",
        text: "Your first eBook should not be a masterpiece. It should be a solution. Aim for 30–50 pages of pure, actionable content. Use ChatGPT to outline your chapters in 10 minutes, then write each chapter in your own voice. Most creators spend two evenings, not two months. Done beats perfect every time.",
      },
      {
        type: "ul",
        items: [
          "Chapter 1 — The problem your reader is stuck at right now",
          "Chapters 2–6 — One step per chapter, simple and actionable",
          "Final chapter — What success looks like + what to do next",
          "Bonus page — Link to your next product or community",
        ],
      },
      {
        type: "h2",
        text: "Step 3 — Price it for maximum conversions",
      },
      {
        type: "p",
        text: "Indian buyers are value-conscious, not cheap. The difference between ₹49 and ₹299 is not the buyer's wallet — it's their perception of quality. Price too low and people assume the content is worthless. Price in this range and you'll convert impulse buyers while maintaining credibility.",
      },
      {
        type: "table",
        headers: ["Price Point", "Best For", "Conversion Rate"],
        rows: [
          ["₹49–₹99", "Free lead magnet tier", "High but low value"],
          ["₹199–₹299", "First eBook, impulse buy", "Best for beginners"],
          ["₹499–₹799", "Bundle with templates", "Strong with warm audience"],
          ["₹999–₹2,499", "Premium vault / course", "Lower but high revenue"],
        ],
      },
      {
        type: "h2",
        text: "Step 4 — Get your first 10 sales without any followers",
      },
      {
        type: "ul",
        items: [
          "WhatsApp Status — Post a simple 'just launched' story to your contacts. Most creators get 5–8 sales from people they already know.",
          "Instagram Reels — 3 short videos sharing one tip from your eBook each. End with 'comment EBOOK and I'll DM you the link.'",
          "Quora answers — Find questions in your niche, write genuinely helpful answers, drop your eBook link as a resource.",
          "Facebook groups — Join 3–5 groups in your niche. Add value for a week, then mention your eBook naturally.",
          "DM your first buyers personally — Ask for honest feedback and a testimonial. Use those testimonials in every future post.",
        ],
      },
      {
        type: "stat",
        value: "72%",
        label: "of Indian digital purchases happen via UPI — frictionless buying",
      },
      {
        type: "quote",
        text: "You don't need 10,000 followers. You need 100 people with a problem you can solve for ₹299.",
      },
      {
        type: "h2",
        text: "The fastest way to launch this month",
      },
      {
        type: "p",
        text: "The Pustika Pro Vault gives you the AI prompts, proven niche list, headline formulas, and 30-day launch checklist that top Indian creators use. Everything you need to go from idea to first sale — without the months of trial and error.",
      },
    ],
  },
  {
    slug: "best-ebook-niches-2026",
    title: "10 Best eBook Niches to Sell in India in 2026 (With Real Demand Data)",
    description:
      "The most profitable eBook niches for Indian creators in 2026 — what's selling, what's saturated, and how to pick a category that pays for years.",
    date: "2026-05-20",
    readingMinutes: 8,
    tags: ["niches", "earn with ebooks", "research"],
    body: [
      {
        type: "p",
        text: "Most niche advice you'll find online is written for American or European markets. Indian buyers are different — different aspirations, different pain points, different price sensitivity. After analysing hundreds of Indian digital product creators, here are the 10 niches actually generating consistent sales in India right now.",
      },
      {
        type: "stat",
        value: "4.2x",
        label: "growth in Indian digital product sales from 2023 to 2025",
      },
      {
        type: "h2",
        text: "The #1 rule before picking your niche",
      },
      {
        type: "p",
        text: "Profitability follows pain. The niches that sell best are not the ones you're most passionate about — they're the ones where people are actively suffering and desperately searching for answers. Your job is to find that pain, package the solution, and put a price on it.",
      },
      {
        type: "h2",
        text: "The 10 niches winning in India right now",
      },
      {
        type: "table",
        headers: ["Niche", "Demand Level", "Competition", "Sweet Spot Price"],
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
        ],
      },
      {
        type: "h2",
        text: "Deep dive — the top 3 niches for beginners",
      },
      {
        type: "h2",
        text: "1. Personal Finance for Indians",
      },
      {
        type: "p",
        text: "Every Indian under 35 is anxious about money but nobody taught them how to manage it. Topics like 'how to invest your first ₹1,000,' 'how to get out of credit card debt,' and 'tax saving for salaried employees' generate massive search volume. The audience is enormous and the trust barrier is low if you speak plainly and practically.",
      },
      {
        type: "h2",
        text: "2. AI Productivity",
      },
      {
        type: "p",
        text: "ChatGPT changed everything. Students, professionals, and small business owners all want to use AI but don't know how. An eBook titled '50 ChatGPT Prompts for MBA Students' or 'How to Use AI to Write Your Resume in 30 Minutes' can sell hundreds of copies with almost zero competition from serious creators.",
      },
      {
        type: "h2",
        text: "3. Career Switching",
      },
      {
        type: "p",
        text: "India has millions of people stuck in jobs they hate, desperately wanting to switch — to IT, to freelancing, to content creation. A specific guide like 'How to Switch from Teaching to UX Design in 6 Months' solves a real, urgent, painful problem. These buyers are highly motivated and convert fast.",
      },
      {
        type: "h2",
        text: "What to avoid in 2026",
      },
      {
        type: "ul",
        items: [
          "Generic self-help — 'How to be happy' competes with every bestselling book ever written.",
          "Crypto trading shortcuts — buyer trust collapsed after 2022 and has not recovered.",
          "Generic AI tools lists — thousands of these exist and none of them sell well anymore.",
          "Any niche where you have zero personal experience — readers can feel inauthenticity instantly.",
        ],
      },
      {
        type: "h2",
        text: "How to pick your niche in 10 minutes",
      },
      {
        type: "p",
        text: "Write down three things: a problem you have personally solved, a skill people regularly ask you about, and a transformation you have witnessed or experienced. Where those three things overlap with a niche from the table above — that is your eBook. Start there, not somewhere you think sounds impressive.",
      },
      {
        type: "quote",
        text: "The best niche is not the most popular one. It's the one where your personal story makes you the most credible voice in the room.",
      },
    ],
  },
  {
    slug: "how-to-price-your-ebook",
    title: "How to Price Your eBook in India (The Psychology Behind ₹199, ₹499 and ₹999)",
    description:
      "A no-fluff pricing framework for digital eBooks in India — anchor prices, bundle tiers, and the psychology that makes buyers click without hesitation.",
    date: "2026-05-05",
    readingMinutes: 7,
    tags: ["pricing", "earn with ebooks"],
    body: [
      {
        type: "p",
        text: "Here is a true story. A creator launched her eBook at ₹49, sold 12 copies in a month, and felt like a failure. She raised the price to ₹349, rewrote the sales page headline, and sold 47 copies in the first week. Same PDF. Same content. Completely different result. The only thing that changed was the price — and what it signalled to buyers.",
      },
      {
        type: "p",
        text: "Pricing is not math. It is psychology. And in India's digital product market, getting it wrong is the single biggest reason good eBooks fail silently.",
      },
      {
        type: "h2",
        text: "The psychology of price perception in India",
      },
      {
        type: "p",
        text: "Indian buyers are not cheap — they are value-conscious. There is a critical difference. A ₹49 eBook triggers the thought: 'This must not be very good.' A ₹499 eBook triggers: 'This creator takes their work seriously.' The content inside could be identical. The price is the first signal of quality before a single word is read.",
      },
      {
        type: "stat",
        value: "3.9x",
        label: "average revenue increase when creators move from ₹49 to ₹299 pricing",
      },
      {
        type: "h2",
        text: "The 3-tier pricing ladder every creator needs",
      },
      {
        type: "table",
        headers: ["Tier", "Price Range", "What to Include", "Goal"],
        rows: [
          ["Entry", "₹199–₹299", "Core eBook (30–50 pages)", "Impulse buy, first sale"],
          ["Mid", "₹499–₹799", "eBook + templates + checklist", "Higher order value"],
          ["Premium", "₹999–₹2,499", "Full vault — multiple eBooks, prompts, community", "Maximum revenue per buyer"],
        ],
      },
      {
        type: "p",
        text: "The goal is not to pick one price — it is to offer all three tiers so every type of buyer has an entry point. Your entry tier converts the curious. Your premium tier is where most of your actual revenue comes from.",
      },
      {
        type: "h2",
        text: "The anchor pricing trick that doubles conversions",
      },
      {
        type: "p",
        text: "Never show your price without showing a higher 'original' price first. This is called anchoring and it is the single most effective pricing tactic in digital products. Your brain does not evaluate price in isolation — it evaluates price relative to a reference point.",
      },
      {
        type: "quote",
        text: "'Originally ₹1,999 — today ₹499.' That contrast makes the buy button feel like a steal, not a stretch. Without the anchor, ₹499 feels expensive. With it, ₹499 feels like a gift.",
      },
      {
        type: "h2",
        text: "When to raise your price",
      },
      {
        type: "ul",
        items: [
          "After your first 10 sales — you now have proof it sells, price reflects that.",
          "After your first 3 testimonials — social proof justifies a higher price point.",
          "When you add bonus material — templates, checklists, or a second eBook.",
          "When you start running paid ads — higher margins protect your ad spend.",
          "Never lower your price as a first response to slow sales — fix the headline and sales page first.",
        ],
      },
      {
        type: "h2",
        text: "The one pricing mistake that kills sales",
      },
      {
        type: "p",
        text: "Putting your price at a round number like ₹500 or ₹300 feels less credible than ₹499 or ₹297. Odd numbers signal that you have thought carefully about the price. Round numbers signal that you guessed. Small detail, measurable difference in conversion.",
      },
      {
        type: "stat",
        value: "₹297",
        label: "consistently outperforms ₹300 in Indian digital product split tests",
      },
    ],
  },
  {
    slug: "promote-your-ebook-without-an-audience",
    title: "How to Promote Your eBook Without an Audience (5 Free Channels That Actually Work)",
    description:
      "You don't need followers to sell eBooks. Five free, repeatable promotion channels that work for first-time creators in India — with real tactics, not theory.",
    date: "2026-04-18",
    readingMinutes: 9,
    tags: ["marketing", "earn with ebooks"],
    body: [
      {
        type: "p",
        text: "Rahul launched his first eBook in January 2025 with 340 Instagram followers. By March he had made ₹38,000 in sales. He did not go viral. He did not run ads. He used five free channels systematically, and he did not stop after the first week when sales were slow. This guide breaks down exactly what he did — and what you can start today.",
      },
      {
        type: "stat",
        value: "₹38,000",
        label: "earned in 60 days with 340 followers — using only free channels",
      },
      {
        type: "h2",
        text: "The mindset shift that changes everything",
      },
      {
        type: "p",
        text: "Most creators wait until they have an audience to launch. This is backwards. You build an audience by putting something out in the world — a product, a point of view, a result. The audience follows proof, not potential. Launch first. Build second.",
      },
      {
        type: "quote",
        text: "Waiting until you have 10,000 followers to launch is like waiting until you're fit to start going to the gym. Start with what you have. The results build the momentum.",
      },
      {
        type: "h2",
        text: "Channel 1 — WhatsApp (your fastest first sales)",
      },
      {
        type: "p",
        text: "Your WhatsApp contacts already trust you. That trust is worth more than 10,000 cold Instagram followers. Post a simple WhatsApp Status: 'I just finished something I'm really proud of — my first eBook on [topic]. Early bird price for the next 48 hours only. DM me if you want it.' Most first-time creators get 5–15 sales from this alone within 24 hours.",
      },
      {
        type: "ul",
        items: [
          "Post on WhatsApp Status every day for the first week — not every post needs to sell, most should educate.",
          "Create a broadcast list of 50–100 people who might genuinely benefit from your topic.",
          "Follow up personally with everyone who views your status — personal outreach converts at 30–40%.",
          "Ask your first buyers to share with one person who might also benefit — word of mouth compounds fast.",
        ],
      },
      {
        type: "h2",
        text: "Channel 2 — Instagram Reels (your long-term traffic engine)",
      },
      {
        type: "p",
        text: "Instagram's algorithm actively pushes new accounts if the content is good. You do not need followers — you need hooks. Post 3 Reels per week, each opening with a problem your eBook solves. The format that works best: '3 things nobody tells you about [topic]' — then deliver real value in 45 seconds, and end with 'I wrote a full guide — comment EBOOK and I'll DM you the link.'",
      },
      {
        type: "table",
        headers: ["Reel Type", "Goal", "CTA"],
        rows: [
          ["Problem hook Reel", "Reach new audience", "Comment EBOOK for the link"],
          ["Tip from your eBook", "Build credibility", "Full guide in bio link"],
          ["Your personal story", "Build trust", "DM me if this resonates"],
          ["Before/after result", "Trigger desire", "Link in bio to get started"],
        ],
      },
      {
        type: "h2",
        text: "Channel 3 — Quora and Reddit (compounding free traffic)",
      },
      {
        type: "p",
        text: "Find 10 questions on Quora in your niche that have been viewed more than 5,000 times. Write genuinely helpful, detailed answers — not sales pitches. At the end, mention your eBook as 'a deeper resource if you want to go further.' Quora answers rank on Google for years. One good answer can send you buyers every month for three years without any additional work.",
      },
      {
        type: "h2",
        text: "Channel 4 — YouTube Shorts (overlooked by most Indian creators)",
      },
      {
        type: "p",
        text: "YouTube aggressively promotes Shorts from new channels in 2026 — far more than Instagram does for new accounts. The same content you make for Reels works as Shorts. Upload the same video to both platforms and double your reach with zero extra effort. YouTube Shorts also appear in Google search results, which means double SEO benefit.",
      },
      {
        type: "h2",
        text: "Channel 5 — Facebook Groups (where buyers actually are)",
      },
      {
        type: "p",
        text: "While everyone fights for attention on Instagram, Facebook Groups are full of highly engaged buyers in every niche — personal finance, career growth, parenting, health, and more. Join 5 groups in your niche. Spend the first week adding genuine value — answer questions, share insights, be helpful. Then mention your eBook when relevant. Group members convert at 2–3x the rate of cold social media audiences.",
      },
      {
        type: "stat",
        value: "2–3x",
        label: "higher conversion rate from Facebook Group audiences vs cold social traffic",
      },
      {
        type: "h2",
        text: "The promotion schedule that actually works",
      },
      {
        type: "table",
        headers: ["Day", "Action"],
        rows: [
          ["Day 1", "WhatsApp Status + personal DMs to 20 contacts"],
          ["Day 2–3", "Post first Instagram Reel + answer 3 Quora questions"],
          ["Day 4–5", "Join 3 Facebook Groups, start adding value"],
          ["Day 6–7", "Upload Reels to YouTube Shorts + follow up on DMs"],
          ["Week 2+", "Repeat — 3 Reels/week, 2 Quora answers/week, daily WhatsApp Status"],
        ],
      },
      {
        type: "quote",
        text: "Consistency for 30 days beats viral moments every time. Show up every day for one month and your results will surprise you.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
