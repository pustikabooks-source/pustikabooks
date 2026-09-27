import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles.css";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYouBasic from "./pages/ThankYouBasic";
import ThankYouPro from "./pages/ThankYouPro";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import BlogEditor from "./pages/BlogEditor";
import Products from "./pages/Products";
import BlogCategory from "./pages/BlogCategory";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

function waitForGtag(maxWaitMs = 5000): Promise<Gtag> {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const check = () => {
      if (typeof window.gtag === "function") {
        resolve(window.gtag);
        return;
      }

      if (Date.now() - startedAt >= maxWaitMs) {
        // The inline GA bootstrap normally defines gtag immediately. If it does
        // not, keep the event queued through dataLayer rather than dropping it.
        const queuedGtag = ((...args: unknown[]) => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(args);
        }) as Gtag;
        resolve(queuedGtag);
        return;
      }

      window.setTimeout(check, 50);
    };

    check();
  });
}

function sendPageView(gtag: Gtag) {
  gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  });
}

function getRouteSignature() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function Analytics() {
  const location = useLocation();
  const lastSentSignatureRef = useRef("");

  useEffect(() => {
    const routeSignature = `${location.pathname}${location.search}${location.hash}`;
    let cancelled = false;
    let settleTimer: number | undefined;
    let safetyTimer: number | undefined;
    let observer: MutationObserver | undefined;

    const trackAfterSettlement = async () => {
      const gtag = await waitForGtag();
      if (cancelled) return;

      const titleNode = document.querySelector("title");
      const sendOnce = () => {
        if (cancelled || getRouteSignature() !== routeSignature) return;
        if (lastSentSignatureRef.current === routeSignature) return;

        lastSentSignatureRef.current = routeSignature;
        sendPageView(gtag);
      };

      if (!titleNode) {
        sendOnce();
        return;
      }

      const settle = () => {
        if (settleTimer !== undefined) window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(() => {
          observer?.disconnect();
          sendOnce();
        }, 100);
      };

      observer = new MutationObserver(settle);
      observer.observe(titleNode, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Allow Helmet's committed title to settle without using a long delay.
      settle();
      safetyTimer = window.setTimeout(() => {
        observer?.disconnect();
        sendOnce();
      }, 500);
    };

    // Let the destination route render before observing Helmet's title.
    window.requestAnimationFrame(() => {
      void trackAfterSettlement();
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (settleTimer !== undefined) window.clearTimeout(settleTimer);
      if (safetyTimer !== undefined) window.clearTimeout(safetyTimer);
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you-basic" element={<ThankYouBasic />} />
          <Route path="/thank-you-pro" element={<ThankYouPro />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ebooks" element={<BlogCategory />} />
          <Route path="/blog/digital-products" element={<BlogCategory />} />
          <Route path="/blog/ai-for-creators" element={<BlogCategory />} />
          <Route path="/blog/marketing" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/new" element={<BlogEditor />} />
          <Route path="/blog/edit/:slug" element={<BlogEditor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
