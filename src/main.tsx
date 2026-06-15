import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles.css";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYouBasic from "./pages/ThankYouBasic";
import ThankYouPro from "./pages/ThankYouPro";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/thank-you-basic" element={<ThankYouBasic />} />
        <Route path="/thank-you-pro" element={<ThankYouPro />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
