import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYouBasic from "./pages/ThankYouBasic";
import ThankYouPro from "./pages/ThankYouPro";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/thank-you-basic" element={<ThankYouBasic />} />
        <Route path="/thank-you-pro" element={<ThankYouPro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
