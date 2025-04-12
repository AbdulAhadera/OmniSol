import { useIsMobile } from '../hooks/use-mobile';
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Features from "@/components/features";
import Process from "@/components/process";
import AiDemo from "@/components/ai-demo";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Integrations from "@/components/integrations";

const Index = () => {

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <Process />
      <AiDemo />

      <section id="integration">
        <Integrations />
      </section>

      <Testimonials />
      <FAQ />

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
};

export default Index;