"use client";
import { motion } from "framer-motion";
import Portfolio from "./components/Portfolio"; // Add this import

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          D4D Studio
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
          variants={itemVariants}
        >
          Innovative Architecture & Interior Design Solutions
        </motion.p>

        <motion.div className="flex gap-4" variants={itemVariants}>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            View Portfolio
          </button>
          <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
            Get In Touch
          </button>
        </motion.div>
      </motion.section>

      {/* Portfolio Section - Add this */}
      <Portfolio />
    </main>
  );
}
