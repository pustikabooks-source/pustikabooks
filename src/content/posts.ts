export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingMinutes: number;
  tags: string[];
  // Simple structured body — rendered as sections with optional list items.
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
  >;
}

export const posts: BlogPost[] = [
  {
    slug: "how-to-earn-money-selling-ebooks-in-india",
    title: "How to Earn Money Selling eBooks in India (2026 Beginner's Guide)",
    description:
      "A practical, step-by-step guide to writing, pricing, and selling your first eBook in India — even if you're starting from zero followers.",
    date: "2026-06-01",
    readingMinutes: 8,
    tags: ["earn with ebooks", "beginners", "india"],
    body: [
      {
        type: "p",
        text: "Selling eBooks is one of the cleanest income streams you can build today. No inventory, no shipping, 100% profit margins, and a one-time effort that keeps paying you for years. If you've ever wondered whether 'real' people earn from eBooks in India — yes, they do. And the playbook is simpler than the internet makes it sound.",
      },
      { type: "h2", text: "Why eBooks are the perfect first digital product" },
      {
        type: "ul",
        items: [
          "Low cost to create — you only need your knowledge and a free tool like Google Docs or Canva.",
          "Instant delivery — payment gateways like Razorpay can auto-send the PDF the moment someone pays.",
          "Stackable income — one eBook can be sold to thousands of buyers without extra work.",
          "Authority builder — a published eBook makes you the 'expert' in your niche.",
        ],
      },
      { type: "h2", text: "Step 1 — Pick a niche people will pay for" },
      {
        type: "p",
        text: "Don't write 'a book about life.' Write a book that solves one painful, specific problem. The fastest test: can you finish the sentence 'This eBook helps ____ do ____ in ____ days'? If yes, you have a niche.",
      },
      { type: "h2", text: "Step 2 — Write a 30–50 page lead-with-value eBook" },
      {
        type: "p",
        text: "Your first eBook should not be a 300-page masterpiece. Aim for 30–50 pages of pure, actionable content. Use AI prompts to outline chapters, then expand them in your own voice. Spend two evenings, not two months.",
      },
      { type: "h2", text: "Step 3 — Price it for the Indian market" },
      {
        type: "p",
        text: "₹199–₹499 is the sweet spot for first-time creators. Low enough for impulse buys, high enough that buyers value what they get. Once you have testimonials, raise the price or bundle it.",
      },
      { type: "h2", text: "Step 4 — Sell it without an audience" },
      {
        type: "ul",
        items: [
          "Post 3 short Reels/Shorts a day talking about one tip from your eBook.",
          "Pin a link-in-bio (Razorpay page or simple landing page) with the buy button.",
          "DM everyone who comments 'interested' — manual sales close fastest in the first 30 days.",
        ],
      },
      {
        type: "quote",
        text: "You don't need 10,000 followers. You need 100 people with a problem you can solve for ₹299.",
      },
      { type: "h2", text: "Ready to skip the trial and error?" },
      {
        type: "p",
        text: "The Pustika Pro Vault gives you the AI prompts, niche list, headline formulas, and 30-day launch checklist top creators use — so you can launch your first eBook this month, not 'someday.'",
      },
    ],
  },
  {
    slug: "best-ebook-niches-2026",
    title: "10 Best eBook Niches to Sell in 2026 (Tested & Profitable)",
    description:
      "The most profitable eBook niches for 2026 — what's selling, what's saturated, and how to pick a category that pays for years.",
    date: "2026-05-20",
    readingMinutes: 6,
    tags: ["niches", "earn with ebooks", "research"],
    body: [
      {
        type: "p",
        text: "Picking the right niche is 80% of your eBook's success. The wrong topic means you can write the world's best book and still hear crickets. The right topic means even a rough first draft sells. Here are the 10 niches we see working in 2026.",
      },
      { type: "h2", text: "The 10 niches that actually sell" },
      {
        type: "ul",
        items: [
          "Personal finance for Indians — investing, taxes, side income, debt freedom.",
          "AI productivity — ChatGPT prompts, automations, AI for students and creators.",
          "Career switching — IT to AI, govt job preparation, freshers' resume hacks.",
          "Health & weight loss — Indian diet plans, PCOS recovery, fasting protocols.",
          "Faith & self-discipline — habit building, journaling, morning routines.",
          "Relationships & communication — for couples, parents, introverts.",
          "Freelancing — Fiverr, Upwork, client outreach scripts.",
          "Instagram & content growth — Reels strategies, monetisation playbooks.",
          "Mini-courses & study guides — for students preparing for exams.",
          "Faceless YouTube / digital business — for people who don't want to show their face.",
        ],
      },
      { type: "h2", text: "How to pick yours in 10 minutes" },
      {
        type: "p",
        text: "Cross your skill, your story, and the market. What have you already learnt the hard way? That story is your eBook. Wrap it in one of the niches above and you're done.",
      },
      { type: "h2", text: "What to avoid in 2026" },
      {
        type: "ul",
        items: [
          "Vague self-help — 'How to be happy' competes with everyone.",
          "Crypto-trading shortcuts — buyers are burnt out and trust is low.",
          "Generic 'AI tools list' eBooks — every 14-year-old on Twitter sells these.",
        ],
      },
    ],
  },
  {
    slug: "how-to-price-your-ebook",
    title: "How to Price Your eBook in India (Without Underselling Yourself)",
    description:
      "A no-fluff pricing framework for digital eBooks in India — anchor prices, bundle tiers, and the psychology behind ₹199, ₹499, and ₹999.",
    date: "2026-05-05",
    readingMinutes: 5,
    tags: ["pricing", "earn with ebooks"],
    body: [
      {
        type: "p",
        text: "Most new creators undersell. They look at their PDF, feel guilty, and slap ₹49 on it. Then they wonder why nobody respects the product. Here's how to price like a pro from day one.",
      },
      { type: "h2", text: "The 3-tier price ladder" },
      {
        type: "ul",
        items: [
          "₹199–₹299 — entry eBook. For impulse buyers who don't know you yet.",
          "₹499–₹799 — mid-tier bundle. eBook + templates + a checklist.",
          "₹999–₹2,499 — premium vault. Multiple eBooks, AI prompts, community access.",
        ],
      },
      { type: "h2", text: "Why low prices kill conversions" },
      {
        type: "p",
        text: "Buyers use price as a proxy for quality. A ₹49 eBook signals 'low effort.' A ₹499 eBook with the same content signals 'serious creator.' Same words, different perception, different sales.",
      },
      { type: "h2", text: "Anchor, then offer" },
      {
        type: "p",
        text: "Always show the 'real' value before the price. 'Originally ₹1,999 — today ₹499.' That contrast is what makes the buy button feel like a steal, not a stretch.",
      },
    ],
  },
  {
    slug: "promote-your-ebook-without-an-audience",
    title: "How to Promote Your eBook Without an Audience (5 Free Channels)",
    description:
      "You don't need followers to sell eBooks. Five free, repeatable promotion channels that work for first-time creators in India.",
    date: "2026-04-18",
    readingMinutes: 6,
    tags: ["marketing", "earn with ebooks"],
    body: [
      {
        type: "p",
        text: "The biggest myth in digital products: 'I'll start selling once I have an audience.' Wrong. You build an audience by selling. Here are the five free channels new creators are using to make their first 100 sales.",
      },
      { type: "h2", text: "1. Instagram Reels with one strong hook" },
      {
        type: "p",
        text: "Three Reels a day, each opening with a problem your eBook solves. Pin a soft CTA in the caption: 'comment EBOOK and I'll DM you the link.'",
      },
      { type: "h2", text: "2. WhatsApp status + broadcast" },
      {
        type: "p",
        text: "Your contacts already trust you. A simple status: 'Just launched my first eBook — DM me if you want the early-bird price.' This alone gets most creators their first 5–10 sales.",
      },
      { type: "h2", text: "3. Quora and Reddit answers" },
      {
        type: "p",
        text: "Find questions in your niche, write genuinely helpful answers, and link your eBook as a 'deeper resource.' Long-tail traffic compounds for years.",
      },
      { type: "h2", text: "4. YouTube Shorts" },
      {
        type: "p",
        text: "Same Reels, different platform. YouTube favours new accounts and pushes Shorts aggressively in 2026.",
      },
      { type: "h2", text: "5. Email a tiny list" },
      {
        type: "p",
        text: "Even 50 emails of friends, classmates, and former colleagues outperforms a cold Instagram audience. Personal beats viral every time.",
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