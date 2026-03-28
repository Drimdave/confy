"use client";

import { useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "As a small business owner, I was initially overwhelmed by the idea of managing our online presence. Partnering with Doddly was a game-changer for us. They developed a tailored strategy that not only increased our website traffic but also significantly boosted our social media engagement.",
    name: "Sarah L",
    title: "CEO of NuHealth",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "What I appreciate most is their transparency and dedication to our success. They are always available to answer questions and make us feel like we have a true partner. We couldn't be happier with the results. I highly recommend them to any business looking to grow online.",
    name: "John Lynn",
    title: "CEO of NuHealth",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "The team's expertise in SEO and digital marketing has completely transformed our lead generation process. We've seen a 300% increase in qualified leads within just six months. Their data-driven approach and regular reporting keep us confident in our investment.",
    name: "Emily Chen",
    title: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "Working with this agency has been an absolute pleasure. They took the time to understand our unique brand voice and translated it perfectly across all our digital channels. The ROI we've achieved has far exceeded our initial expectations.",
    name: "Michael Rodriguez",
    title: "Founder, TechStart",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="px-4 pb-8 w-full">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 lg:p-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#111111] tracking-tight"
          >
            What client says
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 md:gap-3 self-end md:self-auto"
          >
            <button 
              onClick={scrollPrev}
              className="w-12 h-10 md:w-16 md:h-12 rounded-lg md:rounded-xl border border-gray-200 flex items-center justify-center text-[#111111] hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-10 md:w-16 md:h-12 rounded-lg md:rounded-xl bg-[#111111] flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 md:-ml-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-6 md:pl-12"
              >
                <div className="h-full flex flex-col justify-between pr-4">
                  <p className="text-lg sm:text-xl md:text-[22px] leading-relaxed text-[#111111] mb-10 font-normal">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-100 shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-medium text-base">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
