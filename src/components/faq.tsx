
import { useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

type FaqItemType = {
  question: string;
  answer: string;
};

const faqs: FaqItemType[] = [
  {
    question: "How does Omnisol AI’s voice assistant function?",
    answer: "We utilize machine learning combined with advanced natural language that gives our assistants the ability to hold human-like conversations. This allows assistants to hold detailed conversations, ask and answer questions, and perform other functions as naturally as possible."
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer: "Although we encourage transparency about AI, many clients have reported that their callers can't tell that they're talking to an AI assistant. This is because our assistants understand the flow of conversation, can recognize voice patterns, and are designed to sound human-like."
  },
  {
    question: "How long does integration take?",
    answer: "It typically takes 1 to 2 weeks for a basic setup to be completed while it may take 3 to 4 weeks for more complex integrations. Our team communicates with you throughout the entire process to ensure that they process is as seamless as possible."
  },
  {
    question: "Is my data secure with Omnisol AI?",
    answer: "Yes! We are fully compliant with HIPAA and follow very strict data protection standards to ensure that your data is fully encrypted and your information is well protected."
  },
  {
    question: "Can I customize my AI assistant's voice and personality?",
    answer: "Absolutely! There are countless choices available for personalities, voices, and accents to ensure that your assistant represents your business as accurately as possible. Voice cloning services are also available."
  },
  {
    question: "Which businesses benefit the most from Omnisol AI?",
    answer: "Businesses across all sectors benefit from our software. Although, customer service operations, sales departments, and service-based businesses with high call volumes have been found to benefit the most."
  }
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<FaqItemType | null>(null);
  const ref = useRef(null);
  const id = useId();

  useOutsideClick(ref, () => setActiveQuestion(null));

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-secondary/20 rounded-full px-4 py-1 mb-4 border border-secondary/40"
          >
            <span className="text-secondary">FAQs</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Get answers to common questions about our software.
          </motion.p>
        </div>

        <AnimatePresence>
          {activeQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`faq-${activeQuestion.question}-${id}`}
                ref={ref}
                className="w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <motion.h3
                    layoutId={`question-${activeQuestion.question}-${id}`}
                    className="text-xl font-bold text-white mb-4"
                  >
                    {activeQuestion.question}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-300"
                  >
                    {activeQuestion.answer}
                  </motion.p>
                </div>
                <div className="bg-gray-900 p-4 flex justify-end">
                  <button
                    onClick={() => setActiveQuestion(null)}
                    className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layoutId={`faq-${faq.question}-${id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveQuestion(faq)}
              className="p-4 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl mb-4 cursor-pointer hover:border-secondary/40 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <motion.h3
                  layoutId={`question-${faq.question}-${id}`}
                  className="font-medium text-white"
                >
                  {faq.question}
                </motion.h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary h-5 w-5"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
