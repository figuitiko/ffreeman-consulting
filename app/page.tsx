"use client"

import { Shield, Server, Code, Camera, ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const { t } = useLanguage()

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
                <Link href="#services" className="hover:text-[#5ea3a3] transition-colors">
                  {t("services")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="#about" className="hover:text-[#5ea3a3] transition-colors">
                  {t("about")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="#contact" className="hover:text-[#5ea3a3] transition-colors">
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
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("heroTitle")}</h1>
              <p className="text-lg mb-8">{t("heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6">{t("ourServices")}</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                    {t("contactUs")}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-64 h-64">
                <motion.div
                  className="absolute inset-0 bg-[#5ea3a3] rounded-full opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                ></motion.div>
                <Shield className="w-full h-full text-white" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("servicesTitle")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("servicesSubtitle")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Web Hosting */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0e2c47] p-6 flex justify-center">
                  <Server className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("webHosting")}</h3>
                  <p className="text-gray-600 mb-4">{t("webHostingDesc")}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("highPerformance")}</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("dailyBackups")}</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("ddosProtection")}</span>
                    </li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/web-hosting">
                      <Button className="w-full bg-[#0e2c47] hover:bg-[#183d5d] text-white">{t("learnMore")}</Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Web Development */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#5ea3a3] p-6 flex justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("webDevelopment")}</h3>
                  <p className="text-gray-600 mb-4">{t("webDevelopmentDesc")}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("responsiveDesign")}</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("ecommerceSolutions")}</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("cmsIntegration")}</span>
                    </li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/web-development">
                      <Button className="w-full bg-[#0e2c47] hover:bg-[#183d5d] text-white">{t("learnMore")}</Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Video Surveillance */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#1d4e6f] p-6 flex justify-center">
                  <Camera className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("videoSurveillance")}</h3>
                  <p className="text-gray-600 mb-4">{t("videoSurveillanceDesc")}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("hdCameras")}</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("remoteAccess")}</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#5ea3a3] mr-2" />
                      <span>{t("smartAlerts")}</span>
                    </li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/video-surveillance">
                      <Button className="w-full bg-[#0e2c47] hover:bg-[#183d5d] text-white">{t("learnMore")}</Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-6">{t("whyChoose")}</h2>
              <p className="text-gray-600 mb-10">{t("experienceDesc")}</p>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.span
                      className="text-white text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      10+
                    </motion.span>
                  </div>
                  <h3 className="font-bold text-[#0e2c47]">{t("yearsExperience")}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#5ea3a3] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.span
                      className="text-white text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      200+
                    </motion.span>
                  </div>
                  <h3 className="font-bold text-[#0e2c47]">{t("clientsServed")}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#1d4e6f] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.span
                      className="text-white text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    >
                      24/7
                    </motion.span>
                  </div>
                  <h3 className="font-bold text-[#0e2c47]">{t("supportAvailable")}</h3>
                </motion.div>
              </div>
            </motion.div>
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
                <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6 text-lg">
                  {t("getStarted")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("contactTitle")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("contactSubtitle")}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-xl font-bold text-[#0e2c47] mb-6">{t("getInTouch")}</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="h-5 w-5 text-[#5ea3a3] mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">{t("phone")}</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="h-5 w-5 text-[#5ea3a3] mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">{t("email")}</h4>
                      <p className="text-gray-600">info@freemanconsulting.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin className="h-5 w-5 text-[#5ea3a3] mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">{t("office")}</h4>
                      <p className="text-gray-600">
                        123 Business Ave, Suite 100
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-xl font-bold text-[#0e2c47] mb-6">{t("sendMessage")}</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("name")}
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5ea3a3] focus:border-[#5ea3a3]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("email")}
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5ea3a3] focus:border-[#5ea3a3]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("subject")}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5ea3a3] focus:border-[#5ea3a3]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("message")}
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5ea3a3] focus:border-[#5ea3a3]"
                    ></motion.textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-[#0e2c47] hover:bg-[#183d5d] text-white py-3">{t("send")}</Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
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
              <p className="text-gray-300">Providing comprehensive technology solutions for businesses of all sizes.</p>
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
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("aboutUs")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("ourTeam")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
                    {t("testimonials")}
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="#" className="text-gray-300 hover:text-[#5ea3a3]">
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
