'use client';
import React from 'react'
import Link from 'next/link'
import { HeroSection } from '../components/Home/HeroSection'
import { FeatureSection } from '../components/Home/FeatureSection'
import { VideoTourSection } from '../components/Home/VideoTourSection'
import { TestimonialSection } from '../components/Home/TestimonialSection'
import { StatsSection } from '../components/Home/StatsSection'
import CustomCursor from '../components/cursor/cursor'
// import { Button } from '../components/UI/Button'

export function Home() {
  return (
    <>
      {/* custom cursor */}
      <CustomCursor />

      <HeroSection />
      <FeatureSection />
      <VideoTourSection />
      <StatsSection />
      <TestimonialSection />
      {/* CTA Section */}
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Transform your learning and
              <strong className="text-[#0077be]"> achieve </strong>
              your goals
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Join hundreds of students already using Laziya Online Academy to enhance
              their learning experience and unlock their full potential through
              personalized education.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link href="/signup">
                <button className="inline-block rounded border border-[#0077be] bg-[#0077be] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#005a8a]">
                  Get Started
                </button>
              </Link>

              <Link href="/about">
                <button className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="mx-auto hidden max-w-md md:block">
            <img
              src="https://images.pexels.com/photos/6550161/pexels-photo-6550161.jpeg"
              alt="Young student studying with laptop and books"
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              style={{
                background: 'transparent'
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
