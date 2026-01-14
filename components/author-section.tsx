"use client"

import { motion } from "framer-motion"
import { Award, Users, BookOpen } from "lucide-react"

const achievements = [
  { icon: Users, label: "500+ Clients Trained", value: "500+" },
  { icon: Award, label: "Featured in Top Magazines", value: "15+" },
  { icon: BookOpen, label: "Years of Experience", value: "8+" },
]

export default function AuthorSection() {
  return (
    <section className="py-24 bg-[#F3F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">
            Meet the Designer Behind the Book
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#0A3D91] rounded-full blur-3xl opacity-20 scale-110" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/images/person.jpg"
                  alt="Nitesh - Interior Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0A3D91] text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                Lead Designer
              </div>
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-bold text-[#0A3D91]">Hi, I'm Rithika</h3>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                An interior designer helping homeowners and aspiring designers turn ordinary rooms into stunning spaces.
                This eBook is the result of my{" "}
                <span className="font-semibold text-[#0A3D91]">8+ years of experience</span> in creating functional yet
                beautiful interiors.
              </p>
              <p className="text-[#4a5568] leading-relaxed">
                I've worked with hundreds of clients across India, from cozy apartments to luxury villas. Now, I'm
                sharing my proven methods and secret techniques that have transformed countless homes.
              </p>
            </div>

            {/* Achievement badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-xl shadow-md"
                >
                  <achievement.icon className="w-8 h-8 text-[#0A3D91] mx-auto mb-2" />
                  <p className="font-bold text-2xl text-[#0A3D91]">{achievement.value}</p>
                  <p className="text-xs text-[#4a5568]">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
