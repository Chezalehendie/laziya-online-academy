'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '../UI/Button'

export function HeroSection() {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077be]">
        <div className="absolute inset-0 bg-black/30"></div>
        <img 
          className="object-cover w-full h-full opacity-40" 
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Young student studying online with laptop" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Empowering Minds, Anywhere Anytime
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Transform your learning experience with Laziya Online Academy. Our comprehensive platform connects students, teachers, and administrators with cutting-edge educational tools.
          </p>

          <div className="mt-8 lg:mt-12">
            <Link href="/signup">
              <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-[#00b4d8] border border-transparent rounded-md hover:bg-[#03045e] focus:bg-[#03045e]">
                Get Started Today
              </button>
            </Link>
          </div>

          {/* <p className="mt-4 text-sm text-gray-300">
            Join thousands of students already learning with Laziya Online Academy
          </p> */}
        </div>
      </div>
    </section>
  )
}
