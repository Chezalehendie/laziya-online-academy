'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
const faqs = [
  {
    question: 'How do I get started with Laziya?',
    answer:
      "Getting started is simple! Just click the 'Sign Up' button, choose your role (administrator, teacher, student, or parent), and follow the guided setup process. If you're a school administrator, you can also request a demo for a personalized walkthrough.",
  },
  {
    question: 'Is Laziya suitable for all sizes?',
    answer:
      'Yes, Laziya is designed to scale with your needs. We serve as a small private schools, large public school districts, and everything in between. Our flexible pricing plans are based on the number of users and required features.',
  },
  {
    question: "How secure is my data on Laziya Online Academy?",
    answer:
      "Security is our top priority. Laziya employs enterprise-grade encryption, regular security audits, and strict access controls. We're compliant with FERPA and other educational data privacy regulations to ensure your information remains protected.",
  },
  {
    question: "Can parents track their children's progress?",
    answer:
      "Absolutely! Parents receive their own login credentials to access real-time updates on their children's attendance, grades, assignments, and teacher communications. They can also set up notification preferences for important updates.",
  },
  {
    question: 'Do you offer training for new users?',
    answer:
      'Yes, we provide comprehensive training resources including video tutorials, documentation, and live webinars. we also offer personalized onboarding sessions for administrators and staff.',
  },
]
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#03045e] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-[#03045e]">
                  {faq.question}
                </h3>
                <span className="text-[#00b4d8] ml-2">
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="mt-3 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
