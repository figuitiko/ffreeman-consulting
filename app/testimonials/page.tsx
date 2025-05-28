"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TestimonialsPage() {
  const { t } = useLanguage()
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      position: "CEO",
      image: "/placeholder.svg?height=100&width=100",
      shortQuote: "Freeman Consulting transformed our online presence with their web development services.",
      fullQuote:
        "Freeman Consulting transformed our online presence with their web development services. Their team was professional, responsive, and delivered a website that exceeded our expectations. The new site has significantly increased our lead generation and improved our customer engagement. I highly recommend their services to any business looking to enhance their digital footprint.",
      stars: 5,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      company: "Secure Solutions LLC",
      position: "Operations Director",
      image: "/placeholder.svg?height=100&width=100",
      shortQuote:
        "The video surveillance system installed by Freeman Consulting has been a game-changer for our security operations.",
      fullQuote:
        "The video surveillance system installed by Freeman Consulting has been a game-changer for our security operations. The quality of the cameras and the intuitive monitoring interface have made it easy for our team to maintain a secure environment. Their ongoing support has been exceptional, with quick responses to any questions or issues we've encountered. We feel much more confident in our security measures since partnering with Freeman.",
      stars: 5,
    },
    {
      id: 3,
      name: "Jennifer Lee",
      company: "Global E-commerce",
      position: "Marketing Manager",
      image: "/placeholder.svg?height=100&width=100",
      shortQuote: "Our website's performance has improved dramatically since switching to Freeman's hosting services.",
      fullQuote:
        "Our website's performance has improved dramatically since switching to Freeman's hosting services. Page load times have decreased by 40%, and we've experienced zero downtime in the six months since migration. Their technical team made the transition seamless, and their customer support is always available when we need assistance. The improved performance has directly contributed to an increase in our conversion rates and customer satisfaction scores.",
      stars: 4,
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Local Retail Chain",
      position: "IT Director",
      image: "/placeholder.svg?height=100&width=100",
      shortQuote:
        "Freeman Consulting provided an integrated technology solution that streamlined our operations across multiple locations.",
      fullQuote:
        "Freeman Consulting provided an integrated technology solution that streamlined our operations across multiple locations. They took the time to understand our unique challenges and designed a custom system that addressed all our needs. The implementation was smooth, and the training they provided ensured our staff could utilize the new system effectively. We've seen a 30% increase in efficiency and a significant reduction in IT-related issues since working with them.",
      stars: 5,
    },
    {
      id: 5,
      name: "Amanda Garcia",
      company: "Healthcare Services",
      position: "Administrator",
      image: "/placeholder.svg?height=100&width=100",
      shortQuote:
        "The security and compliance features of Freeman's solutions have been crucial for our healthcare facility.",
      fullQuote:
        "The security and compliance features of Freeman's solutions have been crucial for our healthcare facility. They understood the importance of HIPAA compliance and implemented systems that protect our sensitive data while still being user-friendly for our staff. Their team was knowledgeable about healthcare-specific requirements and provided customized training for our employees. We feel confident that our technology infrastructure is both secure and efficient thanks to Freeman Consulting.",
      stars: 5,
    },
    {
      id: 6,
      name: "Robert Chen",
      company: "Financial Advisors Group",
      position: "Managing Partner",
      image: "/placeholder.svg?height=100&width=100",
      shortQuote: "Freeman Consulting's IT support has been reliable, responsive, and invaluable to our firm.",
      fullQuote:
        "Freeman Consulting's IT support has been reliable, responsive, and invaluable to our firm. In the financial industry, we can't afford any downtime or security breaches, and their proactive approach to IT management has prevented numerous potential issues. Their team is always available for urgent matters, and they've helped us stay ahead of technology trends in our industry. The peace of mind we've gained from their services is worth every penny.",
      stars: 4,
    },
  ]

  const toggleTestimonial = (id: number) => {
    if (expandedTestimonial === id) {
      setExpandedTestimonial(null)
    } else {
      setExpandedTestimonial(id)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#0e2c47] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Shield className="h-10 w-10" />
            <span className="text-2xl font-bold">Freeman Consulting</span>
          </motion.div>
          <nav className="hidden md:flex gap-8">
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/#services" className="hover:text-[#5ea3a3] transition-colors">
                  {t("services")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/about-us" className="hover:text-[#5ea3a3] transition-colors">
                  {t("about")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/#contact" className="hover:text-[#5ea3a3] transition-colors">
                  {t("contact")}
                </Link>
              </motion.div>
            </motion.div>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white">{t("getQuote")}</Button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#0e2c47] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <Quote className="h-20 w-20 text-[#5ea3a3]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("testimonialsTitle")}</h1>
              <p className="text-lg mb-8">{t("testimonialsSubtitle")}</p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("clientsSay")}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-[#0e2c47]">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="h-8 w-8 text-[#5ea3a3] opacity-20 absolute -top-2 -left-2" />
                      <p className="text-gray-600 relative z-10 pl-4">
                        {expandedTestimonial === testimonial.id ? testimonial.fullQuote : testimonial.shortQuote}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleTestimonial(testimonial.id)}
                      className="mt-4 text-[#5ea3a3] hover:text-[#4a8c8c] font-medium flex items-center"
                    >
                      {expandedTestimonial === testimonial.id ? t("readLess") : t("readMore")}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0e2c47] text-white py-16 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[#5ea3a3] opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "400% 400%",
              backgroundImage: "radial-gradient(circle, rgba(94,163,163,0.8) 0%, rgba(14,44,71,0) 70%)",
            }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t("readyToSecure")}</h2>
              <p className="max-w-2xl mx-auto mb-8">{t("ctaDesc")}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#contact">
                  <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6 text-lg">
                    {t("contactUs")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0e2c47] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-8 w-8" />
                <span className="text-xl font-bold">Freeman Consulting</span>
              </div>
              <p className="text-gray-300">{t("providingTech")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">{t("services")}</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/web-hosting" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("webHosting")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/web-development" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("webDevelopment")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/video-surveillance" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("videoSurveillance")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("itConsulting")}
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">{t("company")}</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/about-us" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("aboutUs")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/our-team" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("ourTeam")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/testimonials" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("testimonials")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/careers" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("careers")}
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4">{t("legal")}</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("privacyPolicy")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("termsOfService")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("cookiePolicy")}
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p>
              &copy; {new Date().getFullYear()} Freeman Consulting. {t("allRightsReserved")}
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
