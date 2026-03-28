"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative max-w-[1400px] mx-auto w-full px-4 mt-4 mb-4 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between px-6 py-4 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative z-50"
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-8 bg-black rounded-r-full rounded-l-[2px]" />
          <span className="text-xl font-bold tracking-tight text-black">Confy</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
            Service <ChevronDown className="w-4 h-4" />
          </div>
          <Link href="#" className="hover:text-black transition-colors">Features</Link>
          <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-black transition-colors">Blog</Link>
          <Link href="#" className="hover:text-black transition-colors">Contact Us</Link>
        </div>

        <button className="hidden md:block px-6 py-2.5 border border-gray-300 rounded-full text-[15px] font-medium text-black hover:bg-gray-50 transition-colors">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl py-4 px-6 flex flex-col gap-2 md:hidden z-40 border border-gray-100"
          >
            <div className="flex items-center justify-between text-[15px] font-medium text-gray-600 py-3 border-b border-gray-50">
              Service <ChevronDown className="w-4 h-4" />
            </div>
            <Link href="#" className="text-[15px] font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <button className="w-full mt-4 px-6 py-3 bg-[#3b82f6] rounded-full text-[15px] font-medium text-white hover:bg-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
