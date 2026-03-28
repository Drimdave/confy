"use client";

import { motion } from "motion/react";
import { CheckCircle2, Zap, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 pb-8 w-full">
      <div className="max-w-[1400px] mx-auto bg-[#151515] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
        {/* Faint Grid Lines Background */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-[0.03]">
          <div className="w-px h-full bg-white" />
          <div className="w-px h-full bg-white" />
          <div className="w-px h-full bg-white" />
          <div className="w-px h-full bg-white" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-medium text-white tracking-tight mb-6"
          >
            Grow{" "}
            <span className="relative inline-block text-[#3b82f6] font-serif italic pr-2">
              faster
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-[#3b82f6]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,15 Q12.5,5 25,15 T50,15 T75,15 T100,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            with our all-in-one marketing platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-lg"
          >
            Agency that build many amazing product to boost your business to next level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 bg-[#222222] rounded-3xl sm:rounded-full p-2 sm:p-1.5 max-w-md mb-10"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent border-none outline-none text-white px-6 py-3 w-full placeholder:text-gray-500 text-center sm:text-left"
            />
            <button className="w-full sm:w-auto bg-[#3b82f6] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-[#3b82f6] fill-[#3b82f6]/20" />
              <span>30 day free trial</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-[#3b82f6] fill-[#3b82f6]/20" />
              <span>There are no credit card requirements</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image & Floating Cards */}
        <div className="relative z-10 flex-1 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 h-[500px] md:h-[600px] lg:h-[700px] mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-[2rem] overflow-hidden"
          >
            <Image
              src="https://i.ibb.co/7JSXhL8K/086c218e872e75cb489a79cb93ecb15d.jpg"
              alt="Marketing Professional"
              fill
              className="object-contain object-bottom"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>

          {/* Floating Card 1: Success Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-8 left-4 lg:left-14 z-20 md:hidden lg:block"
          >
            <div
              className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2 shadow-xl"
            >
              <div className="bg-blue-100 p-1 rounded-full">
                <Zap className="w-4 h-4 text-[#3b82f6] fill-[#3b82f6]" />
              </div>
              <span className="font-bold text-[#3b82f6] text-sm">99%</span>
              <span className="text-gray-600 text-sm font-medium">Success Rate</span>
            </div>
          </motion.div>

          {/* Bottom Cards Container */}
          <div className="absolute bottom-8 left-0 w-full px-4 lg:px-8 z-20 flex justify-between items-end gap-4">
            {/* Floating Card 2: 349+ Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:block flex-1 max-w-[280px]"
            >
              <div
                className="bg-[#3b82f6] p-6 rounded-3xl w-full shadow-2xl"
              >
              <h3 className="text-white text-4xl font-bold mb-2">349+</h3>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                More than 349+ satisfied client received incredible
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#3b82f6] overflow-hidden bg-gray-200 relative">
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`}
                      alt={`Avatar ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            </motion.div>

            {/* Floating Card 3: Statistic Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden sm:block md:hidden lg:block flex-1 max-w-[280px] ml-auto"
            >
              <div
                className="bg-white p-5 rounded-3xl w-full shadow-2xl"
              >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-black font-bold text-sm">Statistic Growth</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md cursor-pointer">
                  Day <ChevronDown className="w-3 h-3" />
                </div>
              </div>

              <div className="flex items-end justify-between h-24 gap-1.5">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-full text-[10px] text-gray-400 pb-4">
                  <span>$40k</span>
                  <span>$30k</span>
                  <span>$20k</span>
                  <span>$10k</span>
                  <span>0</span>
                </div>
                
                {/* Bars */}
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} className="w-4 bg-blue-50 rounded-t-sm relative group h-full flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.1, ease: "easeOut" }}
                      className="w-full bg-[#3b82f6] rounded-t-sm"
                    />
                  </div>
                ))}
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between pl-6 pr-1 mt-2 text-[9px] text-gray-400 font-medium">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
