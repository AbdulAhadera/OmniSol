
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();
  
    const handleNavigation = () => {
      navigate('ai/demo/free');
    };

  return (
    <div
      className="relative min-h-screen flex overflow-hidden bg-black/[0.96] antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )} />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-block bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-1 mb-8 border border-secondary/20"
        >
          <span className="text-secondary">The Future Is Here</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent leading-tight mb-4"
        >
          Integrate your business with
          <br />
          <span className="text-gradient mt-2">
            the most efficient phone assistant
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Omnisol AI has deployed cutting-edge AI technology to transform the business sector by
          reducing operational costs, enhancing customer service efficiency, and simplifying appointment 
          scheduling like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
             onClick={handleNavigation}
            className=" bg-gradient hover:from-primary hover:to-secondary text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
          <a
            href="#features"
            className="bg-white/10 backdrop-blur-md text-white font-medium py-3 px-8 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
