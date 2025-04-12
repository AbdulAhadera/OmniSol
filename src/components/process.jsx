
import { motion } from "framer-motion";
import { CircleCheck, FileStack, Zap } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      icon: <FileStack className="h-8 w-8" />,
      title: "Step 1: Strategy",
      description: "Our team meets with you in order to better understand your business’ needs."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Step 2: Development",
      description: "To streamline your operations, we personalize a plan to ensure that you can see measurable results."
    },
    {
      icon: <CircleCheck className="h-8 w-8" />,
      title: "Step 3: Implementation",
      description: "Get a headstart on your competition as soon as your software is installed and running!  "
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 bg-secondary/20 text-secondary rounded-full border border-secondary/40 mb-4"
          >
            <span className="text-secondary">Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Omnisol AI Revolutionizes Your Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Your business’ future is limitless with the help of our advanced software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-secondary/80 transition-all duration-300"
            >
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-secondary">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
