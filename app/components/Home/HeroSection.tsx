import React from 'react'
import Link from 'next/link'
import { Button } from '../UI/Button'
export function HeroSection() {
  return (
    <section className="bg-[#caf0f8] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#03045e] mb-4">
              Empowering Minds,Anywhere Anytime.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              An all-in-one platform connecting administrators, teachers,
              students, and parents for enhanced learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/signup"}>
                <Button variant="secondary" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button variant="outline" size="lg">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Students collaborating on a digital platform"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
