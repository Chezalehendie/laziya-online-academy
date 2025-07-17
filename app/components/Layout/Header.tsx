'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, XIcon } from 'lucide-react'
import { AnimatePresence } from "framer-motion"
import { motion } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => pathname === path
  const isHomePage = pathname === '/'

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 100)
      } else {
        setIsScrolled(true)
      }
    }

    handleScroll() // Set initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Header */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage 
            ? 'bg-[#03045e] shadow-md' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex">
                <motion.span 
                  className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-[#00b4d8] to-[#caf0f8] bg-clip-text text-transparent tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Laziya Online Academy
                </motion.span>
              </Link>
            </div>

            <motion.button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MenuIcon className="w-6 h-6" />
            </motion.button>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {navItems.map((item) => (
                <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.path}
                    className={
                      isActive(item.path)
                        ? 'text-base font-medium text-[#00b4d8]'
                        : 'text-base font-medium text-white hover:text-[#00b4d8] transition-colors'
                    }
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/login"
                    className="rounded-md bg-[#00b4d8] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#caf0f8] hover:text-[#03045e] transition-colors"
                  >
                    Login
                  </Link>
                </motion.div>

                <div className="hidden sm:flex">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/signup"
                      className="rounded-md bg-[#caf0f8] px-5 py-2.5 text-sm font-medium text-[#03045e] hover:bg-white hover:text-[#03045e] transition-colors"
                    >
                      Register
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </motion.div>

      {/* xs to lg Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-50 flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden"
          >
            <motion.button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800 self-start"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XIcon className="w-6 h-6" />
            </motion.button>

            <div className="flex flex-col flex-grow h-full">
              <nav className="flex flex-col flex-1 mt-10 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      className={
                        isActive(item.path)
                          ? 'flex w-full py-2 font-medium text-[#00b4d8] transition-all duration-200'
                          : 'flex w-full py-2 font-medium text-white transition-all duration-200 hover:text-[#00b4d8]'
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col items-start space-y-3">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link
                    href="/login"
                    className="flex w-full py-2 font-medium text-white transition-all duration-200 hover:text-[#00b4d8]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-[#00b4d8] border border-transparent rounded-full hover:bg-[#caf0f8] focus:bg-[#caf0f8]"
                    role="button"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
