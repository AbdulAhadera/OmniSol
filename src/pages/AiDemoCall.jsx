import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { Phone } from 'lucide-react';
import CallButton from '../components/CallButton';


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
          <div className="w-full ml-3 lg:w-1/2 mx-2 flex justify-center items-center">  {/* Flexbox added here */}
            <CallButton />
          </div>

          <div className="w-full lg:w-1/2 px-2 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Real Estate Agent</h3>
            <p className="text-sm text-gray-400 mt-2">Qualify leads and schedule viewings with AI-powered agents</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full my-2 py-3 block lg:w-[30%] lg:flex bg-gray-900/50 backdrop-blur-sm rounded-xl px-2 border border-gray-800 hover:border-secondary/40 transition-all duration-300"
        >
          <div className="w-full ml-3 lg:w-1/2 mx-2 flex justify-center items-center">  {/* Flexbox added here */}
            <CallButton />
          </div>

          <div className="w-full lg:w-1/2 px-2 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Real Estate Agent</h3>
            <p className="text-sm text-gray-400 mt-2">Qualify leads and schedule viewings with AI-powered agents</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full my-2 py-3 block lg:w-[30%] lg:flex bg-gray-900/50 backdrop-blur-sm rounded-xl px-2 border border-gray-800 hover:border-secondary/40 transition-all duration-300"
        >
          <div className="w-full ml-3 lg:w-1/2 mx-2 flex justify-center items-center">  {/* Flexbox added here */}
            <CallButton />
          </div>

          <div className="w-full lg:w-1/2 px-2 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Real Estate Agent</h3>
            <p className="text-sm text-gray-400 mt-2">Qualify leads and schedule viewings with AI-powered agents</p>
          </div>
        </motion.div>





      </section>

      <Footer />
    </div>
  )
}

export default AiDemoCall;