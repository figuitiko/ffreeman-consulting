"use client"

import { motion } from "framer-motion"
import { Shield, Server, Database, Cloud, Globe, Lock, Cpu, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function WebHostingPage() {
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
                <Server className="h-20 w-20 text-[#5ea3a3]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("webHostingTitle")}</h1>
              <p className="text-lg mb-8">{t("webHostingSubtitle")}</p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6">{t("getStarted")}</Button>
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("hostingFeatures")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("hostingFeaturesDesc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("ssdStorage")}</h3>
                <p className="text-gray-600">{t("ssdStorageDesc")}</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#5ea3a3] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("cloudInfrastructure")}</h3>
                <p className="text-gray-600">{t("cloudInfrastructureDesc")}</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#1d4e6f] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("globalCDN")}</h3>
                <p className="text-gray-600">{t("globalCDNDesc")}</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0e2c47] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("advancedSecurity")}</h3>
                <p className="text-gray-600">{t("advancedSecurityDesc")}</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#5ea3a3] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("resourceOptimization")}</h3>
                <p className="text-gray-600">{t("resourceOptimizationDesc")}</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#1d4e6f] h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{t("support247")}</h3>
                <p className="text-gray-600">{t("support247Desc")}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("hostingPlans")}</h2>
              <p className="max-w-2xl mx-auto text-gray-600">{t("hostingPlansDesc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0e2c47] p-6 text-white text-center">
                  <h3 className="text-xl font-bold">{t("starter")}</h3>
                  <div className="mt-4 flex justify-center items-baseline">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="ml-1 text-sm">{t("month")}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
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
                      <span>1 {t("website")}</span>
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
                      <span>{t("ssdStorage10")}</span>
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
                      <span>{t("unmeteredBandwidth")}</span>
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
                      <span>{t("freeSsl")}</span>
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
                      <span>{t("dailyBackups")}</span>
                    </li>
                  </ul>
                  <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-[#0e2c47] hover:bg-[#183d5d] text-white">{t("selectPlan")}</Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 right-0 bg-[#5ea3a3] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {t("popular")}
                </div>
                <div className="bg-[#5ea3a3] p-6 text-white text-center">
                  <h3 className="text-xl font-bold">{t("business")}</h3>
                  <div className="mt-4 flex justify-center items-baseline">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span className="ml-1 text-sm">{t("month")}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
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
                      <span>
                        {t("unlimited")} {t("websites")}
                      </span>
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
                      <span>{t("ssdStorage50")}</span>
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
                      <span>{t("unmeteredBandwidth")}</span>
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
                      <span>{t("freeSsl")}</span>
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
                      <span>{t("dailyBackups")}</span>
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
                      <span>{t("freeDomain")}</span>
                    </li>
                  </ul>
                  <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white">{t("selectPlan")}</Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#1d4e6f] p-6 text-white text-center">
                  <h3 className="text-xl font-bold">{t("enterprise")}</h3>
                  <div className="mt-4 flex justify-center items-baseline">
                    <span className="text-4xl font-bold">$39.99</span>
                    <span className="ml-1 text-sm">{t("month")}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
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
                      <span>
                        {t("unlimited")} {t("websites")}
                      </span>
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
                      <span>{t("ssdStorage100")}</span>
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
                      <span>{t("unmeteredBandwidth")}</span>
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
                      <span>{t("freeSsl")}</span>
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
                      <span>{t("dailyBackups")}</span>
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
                      <span>{t("freeDomain")}</span>
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
                      <span>{t("prioritySupport")}</span>
                    </li>
                  </ul>
                  <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-[#1d4e6f] hover:bg-[#183d5d] text-white">{t("selectPlan")}</Button>
                  </motion.div>
                </div>
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
              <h2 className="text-3xl font-bold mb-6">{t("readyToGetStarted")}</h2>
              <p className="max-w-2xl mx-auto mb-8">{t("contactTeam")}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6 text-lg">
                  {t("contactUs")}
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
