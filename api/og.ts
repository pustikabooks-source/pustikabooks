import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

const staticPosts: Record<string, { title: string; description: string; image: string }> = {
  "how-to-earn-money-selling-ebooks-in-india": {
    title: "How to Earn Money Selling eBooks in India (2026 Beginner's Guide)",
    description: "A practical, step-by-step guide to writing, pricing, and selling your first eBook in India.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
  },
  "best-ebook-niches-2026": {
    title: "10 Best eBook Niches to Sell in India in 2026 (With Real Demand Data)",
    description: "The most profitable eBook niches for Indian creators in 2026.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
  },
  "how-to-price-your-ebook": {
    title: "How to Price Your eBook in India (The Psychology Behind ₹199, ₹499 and ₹999)",
    description: "A no-fluff pricing framework for digital eBooks in India.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
  },
  "promote-your-ebook-without-an-audience": {
    title: "How to Promote Your eBook Without an Audience (5 Free Channels That Actually Work)",
    description: "Five free, repeatable promotion channels that work for first-time creators in India.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
  },
  "digital-products-vs-physical-products": {
    title: "Digital Products vs Physical Products: Which Business Model Actually Wins in 2026?",
    description: "A no-fluff comparison of digital vs physical product businesses.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const slug = req.url?.split("/blog/")?.[1]?.split("?")?.[0] ?? "";

  let title = "Pustika Books — Turn Your Knowledge Into Digital Income";
  let description = "Practical guides on creating and selling eBooks and digital products worldwide.";
  let image = "https://www.pustikabooks.in/og-image.jpg";
  let url = `https://www.pustikabooks.in/blog/${slug}`;

  // Check static posts first
  if (staticPosts[slug]) {
    title = staticPosts[slug].title;
    description = staticPosts[slug].description;
    image = staticPosts[slug].image;
  } else {
    // Fetch from Supabase
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/blog_posts?slug=eq.${slug}&published=eq.true&select=title,description,body`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );
      const data = await response.json();
      if (data?.[0]) {
        const post = data[0];
        title = post.title;
        description = post.description;
        const firstImage = post.body?.find((b: any) => b.type === "image");
        if (firstImage?.url) image = firstImage.url;
      }
    } catch {
      // fallback to defaults
    }
  }

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>${title}</title>
<meta name="description" content="${description}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="article" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${image}" />
<meta http-equiv="refresh" content="0;url=${url}" />
<script>window.location.href = "${url}";</script>
</head>
<body></body>
</html>`;

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-maxage=3600");
  res.status(200).send(html);
}
