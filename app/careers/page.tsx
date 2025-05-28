"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Briefcase, CheckCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CareersPage() {
  const { t } = useLanguage()
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const benefits = [
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: t("remoteWork"),
      description: t("remoteWorkDesc"),
      color: "#0e2c47",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: t("healthInsurance"),
      description: t("healthInsuranceDesc"),
      color: "#5ea3a3",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: t("paidTimeOff"),
      description: t("paidTimeOffDesc"),
      color: "#1d4e6f",
    },
    {
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      ),
      title: t("professionalDev"),
      description: t("professionalDevDesc"),
      color: "#0e2c47",
    },
    {
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      title: t("teamEvents"),
      description: t("teamEventsDesc"),
      color: "#5ea3a3",
    },
    {
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: t("competitiveSalary"),
      description: t("competitiveSalaryDesc"),
      color: "#1d4e6f",
    },
  ]

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Development",
      location: t("remote"),
      type: t("fullTime"),
      requirements: [
        "5+ years of experience in web development",
        "Strong proficiency in JavaScript, TypeScript, React, and Node.js",
        "Experience with database design and management (SQL and NoSQL)",
        "Knowledge of cloud services (AWS, Azure, or GCP)",
        "Excellent problem-solving and communication skills",
      ],
      responsibilities: [
        "Design and develop high-quality web applications",
        "Collaborate with cross-functional teams to define and implement new features",
        "Ensure the performance, quality, and responsiveness of applications",
        "Identify and correct bottlenecks and fix bugs",
        "Help maintain code quality, organization, and automatization",
      ],
    },
    {
      id: 2,
      title: "IT Security Specialist",
      department: "Security",
      location: t("hybrid"),
      type: t("fullTime"),
      requirements: [
        "3+ years of experience in IT security",
        "Relevant certifications (CISSP, CEH, or equivalent)",
        "Knowledge of security frameworks and best practices",
        "Experience with security tools and technologies",
        "Strong analytical and problem-solving skills",
      ],
      responsibilities: [
        "Develop and implement security measures to protect computer systems, networks, and data",
        "Monitor systems for security breaches and investigate violations",
        "Conduct regular security assessments and audits",
        "Develop security policies and procedures",
        "Train staff on security awareness and best practices",
      ],
    },
    {
      id: 3,
      title: "Customer Support Specialist",
      department: "Support",
      location: t("remote"),
      type: t("fullTime"),
      requirements: [
        "2+ years of experience in customer support or related field",
        "Strong technical troubleshooting skills",
        "Excellent communication and interpersonal skills",
        "Ability to work in a fast-paced environment",
        "Knowledge of CRM systems",
      ],
      responsibilities: [
        "Provide technical support to customers via phone, email, and chat",
        "Troubleshoot and resolve customer issues in a timely manner",
        "Document customer interactions and solutions in CRM system",
        "Identify and escalate complex issues to appropriate teams",
        "Contribute to knowledge base and support documentation",
      ],
    },
  ]

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
                <Briefcase className="h-20 w-20 text-[#5ea3a3]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("careersTitle")}</h1>
              <p className="text-lg mb-8">{t("careersSubtitle")}</p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("whyWorkWithUs")}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                >
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: benefit.color }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0e2c47] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#0e2c47] mb-4">{t("currentOpenings")}</h2>
            </motion.div>

            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <motion.div
                    key={job.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[#0e2c47]">{job.title}</h3>
                          <p className="text-gray-600">{job.department}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                          <span className="bg-[#0e2c47] text-white text-xs px-3 py-1 rounded-full">{job.location}</span>
                          <span className="bg-[#5ea3a3] text-white text-xs px-3 py-1 rounded-full">{job.type}</span>
                        </div>
                      </div>
                      {selectedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 border-t pt-4"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-bold text-[#0e2c47] mb-2">{t("jobRequirements")}</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {job.requirements.map((req, index) => (
                                  <li key={index} className="text-gray-600">
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#0e2c47] mb-2">{t("jobResponsibilities")}</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {job.responsibilities.map((resp, index) => (
                                  <li key={index} className="text-gray-600">
                                    {resp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-6 flex justify-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button className="bg-[#0e2c47] hover:bg-[#183d5d] text-white px-8 py-2">
                                {t("applyNow")}
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="mt-2 text-[#5ea3a3] hover:text-[#4a8c8c] font-medium flex items-center"
                      >
                        {selectedJob === job.id ? t("readLess") : t("readMore")}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">{t("noOpenings")}</p>
              </div>
            )}
          </div>
        </section>

        {/* Application Form CTA */}
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
              <h2 className="text-3xl font-bold mb-6">{t("applicationForm")}</h2>
              <p className="max-w-2xl mx-auto mb-8">{t("joinTeamContent")}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#5ea3a3] hover:bg-[#4a8c8c] text-white px-8 py-6 text-lg">
                  {t("applyNow")}
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
