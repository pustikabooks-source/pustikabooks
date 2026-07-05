import { StrictMode, useEffect } from "react";
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
function Analytics() {
  const location = useLocation();
  useEffect(() => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("config", "G-67HQPXJ3QB", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
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
