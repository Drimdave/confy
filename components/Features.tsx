"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Zap, Rocket, Sliders } from "lucide-react";

export function Features() {
  return (
    <section className="px-4 pb-8 w-full">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 lg:p-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[50px] font-normal no-underline text-center leading-[1.4] md:leading-[1.2] text-[#111111] tracking-tight">
            Our flexible team{" "}
            <span className="inline-flex -space-x-2 md:-space-x-3 align-middle mx-1 md:mx-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full border-2 md:border-[3px] border-white overflow-hidden relative shadow-sm">
                  <Image
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </span>{" "}
            has a wide range of skills, which lets us look at projects from a complete point of view that combines creativity 🎨 and usefulness ✨.
          </h2>
        </motion.div>

        {/* Divider */}
        <hr className="border-gray-100 mb-16" />

        {/* Middle Section: Text + Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xs text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h3 className="text-[22px] leading-snug text-[#111111] mb-6">
              Bring in targeted visitors and increase sales.
            </h3>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-[#111111] hover:bg-gray-50 transition-colors">
              Contact US
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-20 lg:gap-28"
          >
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl lg:text-[72px] font-medium text-[#111111] mb-2 tracking-tight">
                12<span className="text-[#3b82f6] text-[50px] font-normal">+</span>
              </div>
              <div className="text-gray-500 text-sm md:text-base">Year Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl lg:text-[72px] font-medium text-[#111111] mb-2 tracking-tight">
                4,3K<span className="text-[#3b82f6] text-[50px] font-normal">+</span>
              </div>
              <div className="text-gray-500 text-sm md:text-base">Total Revenue</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl lg:text-[72px] font-medium text-[#111111] mb-2 tracking-tight">
                40<span className="text-[#3b82f6] text-[50px] font-normal">+</span>
              </div>
              <div className="text-gray-500 text-sm md:text-base">Profesional Team</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
              <Zap className="w-4 h-4 text-gray-700" />
            </div>
            <h4 className="text-lg font-bold text-[#111111] mb-3">Increase Traffic</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our expertise will help you to improve visibility in search engine results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
              <Rocket className="w-4 h-4 text-gray-700" />
            </div>
            <h4 className="text-lg font-bold text-[#111111] mb-3">Improved Rankings</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We employ ultimate strategic SEO to enhance your website's ranking world wide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
              <Sliders className="w-4 h-4 text-gray-700" />
            </div>
            <h4 className="text-lg font-bold text-[#111111] mb-3">Targeted Audience</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We focus on targeting specific keywords to attract your ideal audience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
