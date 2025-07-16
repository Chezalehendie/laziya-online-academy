import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#03045e] text-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="flex justify-center text-[#00b4d8] sm:justify-start">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00b4d8] to-[#caf0f8] bg-clip-text text-transparent">
                Laziya Online Academy
              </h3>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-300 sm:max-w-xs sm:text-left">
              Empowering online education for students, teachers, and administrators worldwide.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#00b4d8] transition hover:text-[#caf0f8]"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook size={24} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#00b4d8] transition hover:text-[#caf0f8]"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram size={24} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#00b4d8] transition hover:text-[#caf0f8]"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="/about"
                  >
                    Our Story
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="/about"
                  >
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Mission & Vision
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Online Courses
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Student Management
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Progress Tracking
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Certification
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-300 transition hover:text-[#00b4d8]"
                    href="#"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-gray-300 transition group-hover:text-[#00b4d8]">
                      Live Chat
                    </span>

                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b4d8] opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-[#00b4d8]"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:info@laziyaonlineacademy.com"
                  >
                    <Mail className="size-5 shrink-0 text-[#00b4d8]" />
                    <span className="flex-1 text-gray-300">info@laziyaonlineacademy.com</span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="tel:+265983020084"
                  >
                    <Phone className="size-5 shrink-0 text-[#00b4d8]" />
                    <span className="flex-1 text-gray-300">+265 983020084</span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <MapPin className="size-5 shrink-0 text-[#00b4d8]" />
                  <address className="-mt-0.5 flex-1 text-gray-300 not-italic">
                    Area 49, Lilongwe, Malawi
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-[#00b4d8] underline transition hover:text-[#caf0f8] ml-2"
                href="#"
              >
                Terms & Conditions
              </a>

              <span className="mx-2">&middot;</span>

              <a
                className="inline-block text-[#00b4d8] underline transition hover:text-[#caf0f8]"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-400 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} Laziya Online Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
