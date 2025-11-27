import { Github, FileText, Book } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo_dark_v1.svg";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F0F12]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt="Kudora Logo"
              className="w-12 h-12 border-white border rounded-full"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="https://github.com/Kudora-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://kudora.org/white-paper/"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Whitepaper</span>
            </a>
            <a
              href="https://github.com/Kudora-Labs"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Book className="w-4 h-4" />
              <span>Documentation</span>
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
