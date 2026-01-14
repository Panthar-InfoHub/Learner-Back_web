"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Riya M.",
    location: "Pune",
    image: "14.png",
    rating: 5,
    text: "This guide completely changed how I plan my spaces — practical and visually stunning! Every page is packed with actionable tips.",
  },
  {
    name: "Arun K.",
    location: "Mumbai",
    image: "male1.png",
    rating: 5,
    text: "As someone with zero design experience, this eBook made everything so simple. My living room has never looked better!",
  },
  {
    name: "Anjali S.",
    location: "Bangalore",
    image: "15.png",
    rating: 5,
    text: "The color psychology section alone is worth the price. I've recommended this to all my friends who are decorating their homes.",
  },
  {
    name: "Vikram J.",
    location: "Delhi",
    image: "13.png",
    rating: 5,
    text: "Finally, a guide that doesn't just show pretty pictures but actually teaches you the 'why' behind great design decisions.",
  },
]

export default function TestimonialsSection() {
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">What Readers Are Saying</h2>
          <p className="text-lg text-[#4a5568]">Join thousands of happy readers who transformed their spaces</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-[#0A3D91]/5 border-2 border-[#E6F1FF] hover:border-[#0A3D91] hover:shadow-xl hover:shadow-[#0A3D91]/10 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D7E8FF] group-hover:text-[#0A3D91] transition-colors duration-300" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D7E8FF]">
                  <img
                    src={`/images/${testimonial.image}`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A3D91]">{testimonial.name}</h4>
                  <p className="text-sm text-[#4a5568]">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[#4a5568] leading-relaxed text-sm">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
