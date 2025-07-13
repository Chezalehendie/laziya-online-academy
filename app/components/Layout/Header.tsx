'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, XIcon } from 'lucide-react'
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 bg-[#03045e] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-[#00b4d8] to-[#caf0f8] bg-clip-text text-transparent tracking-wide">
            Laziya Online Academy
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={
              isActive("/")
                ? 'text-[#00b4d8] font-medium'
                : 'hover:text-[#00b4d8] transition-colors'
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              isActive("/about")
                ? 'text-[#00b4d8] font-medium'
                : 'hover:text-[#00b4d8] transition-colors'
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              isActive("/contact")
                ? 'text-[#00b4d8] font-medium'
                : 'hover:text-[#00b4d8] transition-colors'
            }
          >
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-[#03045e] transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-md bg-[#00b4d8] hover:bg-[#caf0f8] hover:text-[#03045e] transition-colors"
          >
            Sign Up
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#03045e] pb-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link
              href="/"
              className={
                isActive("/")
                  ? 'text-[#00b4d8] font-medium'
                  : 'hover:text-[#00b4d8] transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? 'text-[#00b4d8] font-medium'
                  : 'hover:text-[#00b4d8] transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={
                isActive("/contact")
                  ? 'text-[#00b4d8] font-medium'
                  : 'hover:text-[#00b4d8] transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                href="/login"
                className="px-4 py-2 text-center rounded-md border border-white hover:bg-white hover:text-[#03045e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-center rounded-md bg-[#00b4d8] hover:bg-[#caf0f8] hover:text-[#03045e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
