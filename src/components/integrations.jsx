import { motion } from "framer-motion";
import { cn } from "@/lib/utils.ts";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const integrationItems = [
  {
    quote: "Loops",
    name: "CRM & Marketing",
    title: "Integration Partner",
  },
  {
    quote: "MessageBird",
    name: "Communication",
    title: "Integration Partner",
  },
  {
    quote: "Zapier",
    name: "Automation",
    title: "Integration Partner",
  },
  {
    quote: "TED",
    name: "Content",
    title: "Integration Partner",
  },
  {
    quote: "Dropbox",
    name: "Storage",
    title: "Integration Partner",
  },
  {
    quote: "Discord",
    name: "Communication",
    title: "Integration Partner",
  },
  {
    quote: "Upwork",
    name: "Freelancing",
    title: "Integration Partner",
  },
];

const Integrations = () => {

  return (

    <section className="py-24 bg-black" id="integrations">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-secondary/20 rounded-full px-4 py-1 mb-4 border border-secondary/40"
          >
            <span className="text-secondary">INTEGRATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Integration Support- Over 20,104 Available
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Omnisol AI integrates with your current software to seamlessly connect workflows and increase
            efficiency.
          </motion.p>
        </div>



        <div className="py-8 relative overflow-hidden">
          <div className="h-[10rem] w-full bg-black overflow-hidden">
            <InfiniteMovingCards items={integrationItems} direction="right" speed="slow" />
          </div>
        </div>






        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Flawless Integration</h3>
            <p className="text-gray-400">Connect your existing CRM, ERP, and scheduling systems to our software
              without the hassle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Synchronization</h3>
            <p className="text-gray-400">Customer interactions and information will be up-to-date at all times
              across platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">API Access</h3>
            <p className="text-gray-400">Your business will have unique integrations that meet your business needs with the
            help of custom API endpoints.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
