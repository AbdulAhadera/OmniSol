import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { Phone } from 'lucide-react';
import CallButton from '../components/CallButton';


function AiDemoCall() {
  const processSteps = [
    {
      icon: <Phone size={40} />,
      title: "Sky Dental Clinic",
      description: "Automate appointment scheduling and reminders for dental practices."
    },
    {
      icon: <Phone size={40} />,
      title: "Real Estate Cold Caller",
      description: "Qualify leads and schedule viewings with AI-powered agents."
    },
    {
      icon: <Phone size={40} />,
      title: "Gas Station Agent",
      description: "Handle customer inquiries and updates with AI-driven voice assistants."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">

        <CallButton />

      </section>

      <Footer />
    </div>
  )
}

export default AiDemoCall;