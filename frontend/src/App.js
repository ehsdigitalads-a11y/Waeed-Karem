import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Brands from "./pages/Brands";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
