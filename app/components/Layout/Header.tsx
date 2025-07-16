'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, XIcon } from 'lucide-react'
import { AnimatePresence } from "framer-motion"
import { motion } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => pathname === path

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header 
      className="bg-[#03045e] sticky top-0 z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-[#00b4d8]">
              <span className="sr-only">Home</span>
              <motion.span 
                className="text-2xl font-extrabold bg-gradient-to-r from-[#00b4d8] to-[#caf0f8] bg-clip-text text-transparent tracking-wide"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Laziya Online Academy
              </motion.span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    className="relative"
                    initial={false}
                    animate={{
                      backgroundColor: isActive(item.path) ? "rgba(0, 180, 216, 0.1)" : "transparent",
                    }}
                    style={{
                      borderRadius: 6,
                      padding: "8px 12px",
                      position: "relative",
                      cursor: "pointer",
                      transition: "background-color 0.2s ease"
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      className={
                        isActive(item.path)
                          ? 'text-[#00b4d8] font-medium'
                          : 'text-white transition hover:text-[#00b4d8]'
                      }
                    >
                      {item.label}
                    </Link>
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full"
                        layoutId="activeNavIndicator"
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30,
                          duration: 0.3
                        }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
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

            <div className="block md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="rounded-sm bg-[#caf0f8] p-2 text-[#03045e] transition hover:bg-white hover:text-[#03045e]"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#03045e] overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 px-4 pb-4">
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
                          ? 'text-[#00b4d8] font-medium block py-2'
                          : 'text-white hover:text-[#00b4d8] transition-colors block py-2'
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col space-y-2 pt-2">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link
                      href="/login"
                      className="px-4 py-2 text-center rounded-md bg-[#00b4d8] text-white hover:bg-[#caf0f8] hover:text-[#03045e] transition-colors"
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
                      className="px-4 py-2 text-center rounded-md bg-[#caf0f8] text-[#03045e] hover:bg-white hover:text-[#03045e] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
