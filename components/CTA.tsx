"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function CTA() {
  return (
    <section className="px-4 pb-8 w-full">
      <div className="max-w-[1400px] mx-auto bg-[#3b82f6] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[450px] lg:min-h-[500px]">

        {/* Background Dashed Lines */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-px h-full border-l border-dashed border-white/[0.15]" />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full md:w-3/5 lg:w-1/2 mb-12 md:mb-0 pt-8 md:pt-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-[45px] font-medium leading-[1.2] md:leading-[1.15] text-white tracking-tight mb-8 md:mb-10"
          >
            I would like to engage in<br /> a conversation regarding<br /> your endeavor
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow bg-white/20 text-white placeholder:text-white/80 px-6 py-4 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none outline-none focus:bg-white/30 transition-colors"
            />
            <button className="bg-white text-[#3b82f6] px-8 py-4 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 w-full md:w-2/5 lg:w-1/2 mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0 lg:right-10 md:top-0 flex justify-center md:justify-end items-end"
        >
          <div className="relative flex justify-center md:justify-end items-end w-full">
            <Image
              src="https://i.ibb.co/QvspJFL9/8905596066eeabe2bea764a55f4ec8e6-Photoroom.png"
              alt="Contact us"
              width={400}
              height={600}
              className="object-contain object-bottom md:object-right-bottom w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto md:w-[400px] md:h-[600px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
