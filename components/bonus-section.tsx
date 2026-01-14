"use client"

import { motion } from "framer-motion"
import { FileText, Palette, Gift } from "lucide-react"
import { Pencil } from "lucide-react"

const bonuses = [
  {
    icon: FileText,
    title: "Room Makeover Checklist PDF",
    description: "A comprehensive checklist to guide you through every makeover project",
    value: "₹500",
  },
  {
    icon: Pencil,
    title: "Sketchup and Vary course",
    description: "Quick masterclass on choosing the perfect color combinations",
    value: "₹800",
  },
  {
    icon: Palette,
    title: "Home Aesthetic Mood Board Template",
    description: "Create professional mood boards for your design projects",
    value: "₹700",
  },
]

export default function BonusSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Blue ribbon decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0A3D91] via-[#3366CC] to-[#0A3D91]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0A3D91] text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
            <Gift className="w-6 h-6" />
            <span>Exclusive Bonuses</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">
            Free Bonuses Worth ₹2,000 Inside!
          </h2>
          <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
            Get these premium resources absolutely free when you download the eBook today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0A3D91] to-[#3366CC] rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#E6F1FF] h-full">
                <div className="absolute -top-4 -right-4 bg-[#0A3D91] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {bonus.value} Value
                </div>

                <div className="w-16 h-16 bg-[#E6F1FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0A3D91] transition-colors duration-300">
                  <bonus.icon className="w-8 h-8 text-[#0A3D91] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-semibold text-xl text-[#0A3D91] mb-3">{bonus.title}</h3>
                <p className="text-[#4a5568]">{bonus.description}</p>

                <div className="mt-6 flex items-center gap-2 text-[#0A3D91] font-medium">
                  <span className="text-sm">Included FREE</span>
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-[#4a5568]"
        >
          💡 <span className="font-medium">Limited time offer</span> — These bonuses may not be available forever
        </motion.p>
      </div>
    </section>
  )
}
