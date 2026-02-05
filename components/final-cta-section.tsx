"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Shield, Zap, Users } from "lucide-react"

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A3D91] via-[#083070] to-[#0A3D91] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3366CC] rounded-full blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D7E8FF] rounded-full blur-3xl opacity-10 translate-y-1/2 translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Don't Just Dream Beautiful Spaces — Create Them!
          </h2>
          <p className="text-xl text-[#D7E8FF] mb-10 max-w-2xl mx-auto">
            Join 10,000+ readers who have already transformed their homes with this guide
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="https://learnerbag.com/ebook-2-2/" >
              <Button variant="secondary"
                size="lg"
                className="bg-white hover:bg-[#F3F8FF] text-[#0A3D91] px-12 py-8 text-xl font-semibold rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-white/20"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Your Interior Design eBook Now
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span>10,000+ Downloads</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
