"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section className="px-4 pb-8 w-full">
      <div className="max-w-[1400px] mx-auto bg-[#161616] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
        
        {/* Background Dashed Lines */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-px h-full border-l border-dashed border-white/[0.03]" />
          ))}
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[682px] mx-auto mb-16 relative z-10"
        >
          <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] text-white tracking-tight mb-6 w-full max-w-[682px] mx-auto">
            Simple and Flexible Pricing
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Try Growly Premium for free for 7 days. Then choose between the monthly or annual plan.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto relative z-10">
          
          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#222222] rounded-[2rem] p-8 lg:p-12 flex flex-col"
          >
            <h3 className="text-3xl font-medium text-white mb-2">Standard Plan</h3>
            <p className="text-gray-400 text-sm mb-10">Team collaboration for any business</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 flex-grow">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#222222]" fill="white" />
                <span className="text-gray-300 text-sm">75 keywords phrases</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#222222]" fill="white" />
                <span className="text-gray-300 text-sm">8 hours of consulting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#222222]" fill="white" />
                <span className="text-gray-300 text-sm">Custom dashboard: 4</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#222222]" fill="white" />
                <span className="text-gray-300 text-sm">Usability check</span>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-6 sm:gap-0 md:gap-6 lg:gap-0">
              <div className="text-5xl font-medium text-white tracking-tight">$30.99</div>
              <button className="w-full sm:w-auto bg-white text-[#111111] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </div>
          </motion.div>

          {/* Business Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#3b82f6] rounded-[2rem] p-8 lg:p-12 flex flex-col"
          >
            <h3 className="text-3xl font-medium text-white mb-2">Business Plan</h3>
            <p className="text-blue-100 text-sm mb-10">Team collaboration for any business</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 flex-grow">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" fill="white" />
                <span className="text-white text-sm">75 keywords phrases</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" fill="white" />
                <span className="text-white text-sm">48 hours of consulting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" fill="white" />
                <span className="text-white text-sm">Custom dashboard: 30</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" fill="white" />
                <span className="text-white text-sm">Usability check</span>
              </div>
            </div>

            <hr className="border-white/20 mb-8" />

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-6 sm:gap-0 md:gap-6 lg:gap-0">
              <div className="text-5xl font-medium text-white tracking-tight">$99.99</div>
              <button className="w-full sm:w-auto bg-white text-[#111111] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
