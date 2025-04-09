
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AiDemo = () => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('ai/demo/free');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    // Demo submission logic would go here
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-secondary/20 rounded-full px-4 py-1 mb-4 border border-secondary/40"
          >
            <span className="text-secondary ">EXPERIENCE OUR TECHNOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Try a Free Demo Call Today!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Let us give you a glimpse of how our software can transform your customer interactions through
            the use of our powerful technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between mb-4">
                <div className="text-white font-semibold">AI Voice Assistant Demo</div>
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                </div>
              </div>

              <div className="h-64 overflow-y-auto bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-800">
                <div className="flex justify-start gap-3 mb-4">
                  <div className="bg-secondary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                    Hello! I'm your OmnisolAi assistant. How can I help you today?
                  </div>
                </div>

                <div className="flex justify-end gap-3 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                    I want to test your agents.
                  </div>
                  <div className="bg-secondary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                </div>

                <div className="flex justify-start gap-3 mb-4">

                  <div className="bg-secondary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-secondary" />
                  </div>

                  <div className="bg-gray-800 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                    Just Click on "Request Full Demo" button
                  </div>
                </div>
                
              </div>


            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Experience the Future of Customer Interaction
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-secondary shrink-0">
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
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Human-Like Conversations</h4>
                  <p className="text-gray-400">
                    Our software can hold complex conversations while
                    understanding nuance and context just like a human.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-secondary shrink-0">
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
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Around The Clock Availability</h4>
                  <p className="text-gray-400">
                    Our voice agent is available 24/7, even after business
                    hours, to ensure that you satisfy customers without splurging on staffing costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-secondary shrink-0">
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
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Painless Booking</h4>
                  <p className="text-gray-400">
                    Complete routine tasks such as appointment booking and
                    rescheduling without the intervention of a human.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={handleNavigation}
                className="bg-gradient  hover:from-secondary hover:to-secondary text-white font-medium py-3 px-8 rounded-full inline-block transition-all duration-300 transform hover:scale-105"
              >
                Request Full Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default AiDemo;
