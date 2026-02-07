import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

import { FaMedium, FaTwitter } from "react-icons/fa";

const GlobalStyles = () => (
  <style>{`
    html { scroll-behavior: smooth; }
    
    ::selection {
      background-color: rgba(255, 152, 0, 0.4);
      color: white;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #37474f; }
    ::-webkit-scrollbar-thumb {
      background: #546e7a;
      border-radius: 5px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes bounceCustom {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
      40% {transform: translateY(-10px);}
      60% {transform: translateY(-5px);}
    }

    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }

    .animate-bounce-slow {
      animation: bounceCustom 2s infinite;
    }

    .glass-nav {
      background-color: rgba(55, 71, 79, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .project-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .skill-tag {
      transition: all 0.3s ease;
      background: #37474f;
      border: 1px solid #546e7a;
    }

    /* Disable some animations on mobile for performance if needed, 
       but keeping these subtle ones for premium feel */
    @media (hover: hover) {
      .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
      }
      .skill-tag:hover {
        border-color: #ff9800;
        background: rgba(255, 152, 0, 0.1);
        transform: translateY(-2px);
      }
    }
  `}</style>
);

function App() {
  return (
    <div className="bg-[#455a64] text-slate-200 min-h-screen selection:bg-[#ff9800]/30">
      <GlobalStyles />
      <Navbar />
      <main className="overflow-x-hidden">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-12 border-t border-slate-600 text-center bg-[#37474f]">
        <p className="text-slate-400 text-sm mb-2 font-medium tracking-wide uppercase">
          &copy; 2026 Stella. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 text-slate-400 mt-4">
          <a href="https://medium.com/@swesweucsy" target="new">
            <FaMedium size={20} className="hover:text-[#ff9800] cursor-pointer transition-colors" />
          </a>
          <a href="https://x.com/stellasoe89" target="new">
            <FaTwitter
              size={20}
              className="hover:text-[#ff9800] cursor-pointer transition-colors"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
