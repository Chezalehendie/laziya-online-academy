import React from 'react'

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
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#03045e] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-s-4 border-[#caf0f8] bg-[#caf0f8]/20 p-4 [&_summary::-webkit-details-marker]:hidden"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between gap-1.5 text-[#03045e] cursor-pointer">
                <h3 className="text-lg font-medium">{faq.question}</h3>

                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-[#00b4d8]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <p className="pt-4 text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
