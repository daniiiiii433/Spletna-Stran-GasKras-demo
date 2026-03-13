import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Merch from "./pages/Merch";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <div className="App font-body bg-stone-50 min-h-screen">
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
