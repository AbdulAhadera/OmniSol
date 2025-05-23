
import { motion } from "framer-motion";
import { Headphones, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <Headphones className="h-12 w-12 text-secondary" />,
    title: "Unlimited Calls",
    description:
      "At Omnisol Ai, we offer our clients unlimited calling so that you never miss another chance to expand your business.",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-secondary" />,
    title: "Highly Compliant",
    description:
      "At Omnisol Ai, we offer our clients unlimited calling so that you never miss another chance to expand your business.",
  },
  {
    icon: <Users className="h-12 w-12 text-secondary" />,
    title: "Custom Personalities",
    description:
      "With thousands of voice agent personalities available, you can set the tone of your business through your virtual assistant.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-24 from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
            className="px-4 py-1 bg-secondary/20 text-secondary rounded-full border border-secondary/40 mb-4"
          >
            KEY FEATURES
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            AI Super Employees
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Leave traditional staffing in the past and enter into the world of AI, where expansive voice
            intelligence offers solutions to modern day problems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-secondary/80 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-secondary/10 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
