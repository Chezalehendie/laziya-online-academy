import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-[#03045e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00b4d8] to-[#caf0f8] bg-clip-text text-transparent">
              Laziya Online Academy
            </h3>
            <p className="text-sm opacity-80">
              Empowering online education for students, teachers, and administrators worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#00b4d8] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#00b4d8] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#00b4d8] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/"} className="hover:text-[#00b4d8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="hover:text-[#00b4d8] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="hover:text-[#00b4d8] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#00b4d8] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00b4d8] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00b4d8] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@laziyaonlineacademy.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+265 983020084</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Area 49, Lilongwe, Malawi</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Laziya Online Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
