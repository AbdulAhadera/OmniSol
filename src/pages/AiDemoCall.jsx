import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion"
import BeautySalonAgent from '../components/BeautySalonAgent';
import PrecisionLabsAgent from '../components/PercisionLabsAgent';
import AllStarAgent from '../components/AllStarAgent';


function AiDemoCall() {

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-24 block md:flex w-full justify-evenly px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full my-2 py-3 block lg:w-[30%] lg:flex bg-gray-900/50 backdrop-blur-sm rounded-xl px-2 border border-gray-800 hover:border-secondary/40 transition-all duration-300"
        >
          <div className="w-full ml-3 lg:w-1/2 mx-2 flex justify-center items-center">
            <PrecisionLabsAgent />
          </div>

          <div className="w-full lg:w-1/2 px-2 text-center">
            <h3 className="text-2xl md:text-2xl font-bold text-white">Precsion Labs</h3>
            <p className="text-sm text-gray-400 mt-2">Precision Labs' AI calling agent provides information on tests, pricing, and scheduling.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full my-2 py-3 block lg:w-[30%] lg:flex bg-gray-900/50 backdrop-blur-sm rounded-xl px-2 border border-gray-800 hover:border-secondary/40 transition-all duration-300"
        >
          <div className="w-full ml-3 lg:w-1/2 mx-2 flex justify-center items-center">
            <AllStarAgent />
          </div>

          <div className="w-full lg:w-1/2 px-2 text-center">
            <h3 className="text-2xl md:text-2xl font-bold text-white">All Star Gas Station</h3>
            <p className="text-sm text-gray-400 mt-2">AllStar Gas Station's AI calling agent offers fuel prices, service updates, and location information.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full my-2 py-3 block lg:w-[30%] lg:flex bg-gray-900/50 backdrop-blur-sm rounded-xl px-2 border border-gray-800 hover:border-secondary/40 transition-all duration-300"
        >
          <div className="w-full ml-3 lg:w-1/2 mx-2 flex justify-center items-center"> 
            <BeautySalonAgent />
          </div>

          <div className="w-full lg:w-1/2 px-2 text-center">
            <h3 className="text-2xl md:text-2xl font-bold text-white">Glow & Grace</h3>
            <p className="text-sm text-gray-400 mt-2">Glow & Grace Salon's AI calling agent provides booking details, service information, and pricing.</p>
          </div>
        </motion.div>





      </section>

      <Footer />
    </div>
  )
}

export default AiDemoCall;