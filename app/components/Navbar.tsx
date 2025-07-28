"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 px-6 py-4"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="text-2xl font-bold text-black"
        >
          D4D Studio
        </motion.div>

        <motion.ul className="hidden md:flex space-x-8" variants={navVariants}>
          <motion.li variants={itemVariants}>
            <Link
              href="/"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Portfolio
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              href="/about"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>

        {/* Mobile menu button - we'll add this functionality later */}
        <motion.div variants={itemVariants} className="md:hidden">
          <button className="text-black">☰</button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
