"use client"

import { Button } from "@/components/ui/button"
import { Star, Download, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F3F8FF] to-[#E6F1FF]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7E8FF] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E6F1FF] rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#D7E8FF] text-[#0A3D91] px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-[#0A3D91]" />
              <span>Bestselling Interior's Design Guide</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A3D91] leading-tight text-balance">
              Transform Any Space Into a Designer's Dream ✨
            </h1>

            <p className="text-lg md:text-xl text-[#4a5568] leading-relaxed max-w-xl">
              Get my step-by-step guide packed with real-world tips, layouts & color formulas used by top designers.
            </p>

            <div className="space-y-4">
              <Link href="https://learnerbag.com/ebook-2-2/" >
                <Button variant="secondary"
                  size="lg"
                  className="bg-[#0A3D91] hover:bg-[#083070] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0A3D91]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#0A3D91]/30 hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now for ₹499
                </Button>
              </Link>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-[#4a5568] font-medium">"10,000+ readers loved this guide"</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Instant Download", "Lifetime Access", "Money-Back Guarantee"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#0A3D91]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - eBook Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Shadow/Glow effect */}
              <div className="absolute inset-0 bg-[#0A3D91] rounded-3xl blur-3xl opacity-20 transform rotate-6" />

              {/* Book mockup container */}
              <div className="relative bg-gradient-to-br from-[#0A3D91] to-[#083070] rounded-2xl p-8 shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-[#D7E8FF] rounded" />
                    <div className="text-center py-8">
                      <p className="font-serif text-2xl text-[#0A3D91] font-bold">Interior</p>
                      <p className="font-serif text-3xl text-[#0A3D91] font-bold">Design</p>
                      <p className="font-serif text-2xl text-[#0A3D91] font-bold">Secrets</p>
                      <div className="mt-4 w-20 h-1 bg-[#0A3D91] mx-auto" />
                    </div>
                    <img
                      src="/images/1.png"
                      alt="Interior Design Preview"
                      className="w-full h-64 object-contain rounded-lg"
                    />
                    <div className="space-y-2">
                      <div className="w-3/4 h-2 bg-[#E6F1FF] rounded" />
                      <div className="w-1/2 h-2 bg-[#E6F1FF] rounded" />
                    </div>
                  </div>
                </div>

                {/* Decorative pages effect */}
                <div className="absolute -right-2 top-4 bottom-4 w-4 bg-gradient-to-r from-[#E6F1FF] to-white rounded-r-lg" />
                <div className="absolute -right-4 top-6 bottom-6 w-4 bg-gradient-to-r from-[#D7E8FF] to-[#E6F1FF] rounded-r-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
