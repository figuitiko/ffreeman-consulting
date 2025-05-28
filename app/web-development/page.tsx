"use client"

import { motion } from "framer-motion"
import { Shield, Code, Layers, Smartphone, Zap, Database, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function WebDevelopmentPage() {
  const { t } = useLanguage()

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
                <Link href="/#about" className="hover:text-[#5ea3a3] transition-colors">
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
                <Code className="h-20 w-20 text-[#5ea3a3]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("webDevTitle")}</h1>
              <p className="text-lg mb-8">{t("webDevSubtitle")}</p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6">
                    {t("startYourProject")}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                      <ArrowLeft className="mr-2 h-4 w-4" /> {t("backToHome")}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("ourDevServices")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("devServicesDesc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("websiteDesign")}</h3>
                <p className="text-gray-600 mb-4">{t("websiteDesignDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("responsiveDesign")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("seoFriendly")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("cmsIntegration")}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#5ea3a3] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("mobileAppDev")}</h3>
                <p className="text-gray-600 mb-4">{t("mobileAppDevDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("iosAndroid")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("reactNative")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("appStore")}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#1d4e6f] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("ecommerce")}</h3>
                <p className="text-gray-600 mb-4">{t("ecommerceDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("shopify")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("paymentGateway")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("inventory")}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("customWebApps")}</h3>
                <p className="text-gray-600 mb-4">{t("customWebAppsDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("saas")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("enterprise")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#5ea3a3] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("apiDev")}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("techStack")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("techStackDesc")}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "React", delay: 0.1 },
                { name: "Next.js", delay: 0.2 },
                { name: "Node.js", delay: 0.3 },
                { name: "TypeScript", delay: 0.4 },
                { name: "Python", delay: 0.5 },
                { name: "Django", delay: 0.6 },
                { name: "Laravel", delay: 0.7 },
                { name: "Vue.js", delay: 0.8 },
                { name: "Angular", delay: 0.9 },
                { name: "AWS", delay: 1.0 },
                { name: "Docker", delay: 1.1 },
                { name: "MongoDB", delay: 1.2 },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: tech.delay }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <span className="text-lg font-bold text-[#0e2c47]">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("devProcess")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("devProcessDesc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <div className="absolute top-8 left-8 h-1 bg-[#5ea3a3] w-full hidden md:block"></div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("discovery")}</h3>
                <p className="text-gray-600">{t("discoveryDesc")}</p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-[#5ea3a3] h-16 w-16 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <div className="absolute top-8 left-8 h-1 bg-[#5ea3a3] w-full hidden md:block"></div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("planning")}</h3>
                <p className="text-gray-600">{t("planningDesc")}</p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-[#1d4e6f] h-16 w-16 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <div className="absolute top-8 left-8 h-1 bg-[#5ea3a3] w-full hidden md:block"></div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("development")}</h3>
                <p className="text-gray-600">{t("developmentDesc")}</p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("launchSupport")}</h3>
                <p className="text-gray-600">{t("launchSupportDesc")}</p>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-6">{t("readyToStartProject")}</h2>
              <p className="max-w-2xl mx-auto mb-8">{t("contactDevTeam")}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6 text-lg">
                  {t("getInTouch")}
                </Button>
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
