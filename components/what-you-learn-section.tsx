"use client"

import { motion } from "framer-motion"
import { Sofa, Palette, Lightbulb, Home, Wallet } from "lucide-react"

const learningPoints = [
  {
    icon: Sofa,
    title: "Space Planning & Furniture Layouts",
    description: "Master the art of arranging furniture for maximum flow and functionality",
  },
  {
    icon: Palette,
    title: "Color Psychology for Mood & Style",
    description: "Learn how colors influence emotions and create the perfect ambiance",
  },
  {
    icon: Lightbulb,
    title: "Lighting Secrets for Every Room",
    description: "Discover layered lighting techniques that transform spaces",
  },
  {
    icon: Home,
    title: "Styling Small Spaces Like a Pro",
    description: "Maximize every inch with smart design strategies",
  },
  {
    icon: Wallet,
    title: "Budget-friendly Makeover Ideas",
    description: "Achieve luxury looks without breaking the bank",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function WhatYouLearnSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">What's Inside the Guide</h2>
          <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
            Everything you need to transform ordinary spaces into stunning interiors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Page Previews */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Color Schemes", image: "8.jpg" },
                { title: "Space Planning", image: "9.jpg" },
                { title: "Lighting Guide", image: "10.jpg" },
                { title: "Furniture Tips", image: "7.jpg" },
              ].map((preview, index) => (
                <motion.div
                  key={preview.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg shadow-[#0A3D91]/10 hover:shadow-xl hover:shadow-[#0A3D91]/20 transition-all duration-300"
                >
                  <div className="relative h-[300px]">
                    <img
                      src={`/images/${preview.image}`}
                      alt={preview.title}
                      className="w-full h-full object-contain bg-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D91]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold">{preview.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Learning Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {learningPoints.map((point, index) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="flex gap-4 p-5 bg-[#F3F8FF] rounded-xl hover:bg-[#E6F1FF] transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#0A3D91] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#0A3D91] mb-1">{point.title}</h3>
                  <p className="text-[#4a5568]">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
