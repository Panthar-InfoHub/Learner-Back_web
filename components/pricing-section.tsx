"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Shield, Clock, RefreshCw, Check } from "lucide-react"
import Link from "next/link"

const features = [
  "Complete 120+ Page eBook",
  "Step-by-Step Tutorials",
  "Color Formula Guide",
  "Space Planning Templates",
  "All 3 Bonus Items Included",
]

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#F3F8FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">
            Start Your Design Journey Today!
          </h2>
          <p className="text-lg text-[#4a5568]">One-time purchase, lifetime access to everything</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0A3D91] via-[#3366CC] to-[#0A3D91] rounded-3xl opacity-20 blur-xl" />

          <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-[#0A3D91] overflow-hidden">
            {/* Limited offer banner */}
            <div className="bg-[#0A3D91] text-white text-center py-3 font-semibold">
              🔥 Limited Time Offer — Save ₹500 Today!
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-[#4a5568] line-through">₹999</span>
                  <span className="font-serif text-6xl md:text-7xl font-bold text-[#0A3D91]">₹499</span>
                </div>
                <p className="text-[#4a5568]">One-time payment • No subscriptions</p>
              </div>

              {/* Features list */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#E6F1FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#0A3D91]" />
                    </div>
                    <span className="text-[#4a5568]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="https://learnerbag.com/ebook-2-2/">
                <Button
                size="lg"
                className="w-full bg-[#0A3D91] hover:bg-[#083070] text-white py-8 text-xl rounded-xl shadow-lg shadow-[#0A3D91]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#0A3D91]/40 hover:-translate-y-1"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Instantly
              </Button>
              </Link>

              {/* Trust icons */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-[#E6F1FF]">
                <div className="flex items-center gap-2 text-[#4a5568]">
                  <Download className="w-5 h-5 text-[#0A3D91]" />
                  <span className="text-sm">Instant Download</span>
                </div>
                <div className="flex items-center gap-2 text-[#4a5568]">
                  <Clock className="w-5 h-5 text-[#0A3D91]" />
                  <span className="text-sm">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2 text-[#4a5568]">
                  <RefreshCw className="w-5 h-5 text-[#0A3D91]" />
                  <span className="text-sm">100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-8 text-[#4a5568]"
        >
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm">Secure payment powered by trusted providers</span>
        </motion.div>
      </div>
    </section>
  )
}
