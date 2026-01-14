"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"

const pagePreviewsData = [
  { title: "Chapter 1: Foundations", image: "2.jpg" },
  { title: "Color Mastery", image: "3.jpg" },
  { title: "Lighting Guide", image: "4.jpg" },
  { title: "Small Spaces", image: "5.jpg" },
]

export default function SneakPeekSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F3F8FF]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D7E8FF] text-[#0A3D91] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>Exclusive Preview</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">A Glimpse Inside the eBook</h2>
          <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
            Take a sneak peek at the beautifully designed pages packed with practical wisdom
          </p>
        </motion.div>

        {/* Page previews carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {pagePreviewsData.map((preview, index) => (
              <motion.div
                key={preview.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center first:ml-4 last:mr-4"
              >
                <div className="group relative w-72 md:w-80 aspect-[3/2] aspect-video bg-white rounded-2xl overflow-hidden shadow-lg shadow-[#0A3D91]/10 border-2 border-[#E6F1FF] hover:border-[#0A3D91] hover:shadow-2xl hover:shadow-[#0A3D91]/20 transition-all duration-500 hover:-translate-y-2">
                  <img
                    src={`/images/${preview.image}`}
                    alt={preview.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D91] via-[#0A3D91]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-center">{preview.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-[#0A3D91] hover:bg-[#083070] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0A3D91]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#0A3D91]/30 hover:-translate-y-1"
          >
            Get the Full eBook Now — Start Designing Beautiful Spaces Today!
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
