"use client";

import { motion } from "motion/react";
import { FileSearch, TrendingUp, Globe, BookHeart, CircleDollarSign, Mail } from "lucide-react";

const services = [
  {
    title: "Search Engine\nOptimization (SEO)",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
    icon: FileSearch,
    borderClasses: "border-b border-gray-100 md:border-r",
  },
  {
    title: "Conversion Rate\nOptimization (CRO)",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
    icon: TrendingUp,
    borderClasses: "border-b border-gray-100 lg:border-r",
  },
  {
    title: "Online Reputation\nManagement (ORM)",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
    icon: Globe,
    borderClasses: "border-b border-gray-100 md:border-r lg:border-r-0",
  },
  {
    title: "Social Media Marketing",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
    icon: BookHeart,
    borderClasses: "border-b border-gray-100 lg:border-b-0 lg:border-r",
  },
  {
    title: "Pay Per Click (PPC)",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
    icon: CircleDollarSign,
    borderClasses: "border-b border-gray-100 md:border-b-0 md:border-r",
  },
  {
    title: "Email Marketing Automation",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
    icon: Mail,
    borderClasses: "",
  },
];

export function Services() {
  return (
    <section className="px-4 pb-8 w-full">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 lg:p-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-20"
        >
          <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] text-[#111111] tracking-tight">
            We provide our customer the finest<br className="hidden md:block" /> service available
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-8 md:p-12 lg:p-14 text-center flex flex-col items-center ${service.borderClasses}`}
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-[#111111]">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-[#111111] mb-4 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
