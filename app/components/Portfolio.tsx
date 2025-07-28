"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Portfolio = () => {
  // Sample project data - you can replace with real projects later
  const projects = [
    {
      id: 1,
      title: "Modern Villa",
      category: "Architecture",
      image: "/api/placeholder/400/300", // We'll use placeholder for now
    },
    {
      id: 2,
      title: "Luxury Interior",
      category: "Interior Design",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Office Space",
      category: "Commercial",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Restaurant Design",
      category: "Hospitality",
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Residential Complex",
      category: "Architecture",
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Boutique Hotel",
      category: "Hospitality",
      image: "/api/placeholder/400/300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of innovative architectural designs and
            interior spaces
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Project Image</span>
                </div>

                {/* Overlay that appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
