import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
