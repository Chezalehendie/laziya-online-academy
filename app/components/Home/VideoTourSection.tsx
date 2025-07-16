import React from 'react'
import { PlayCircle } from 'lucide-react'
import { Button } from '../UI/Button'

export function VideoTourSection() {
  return (
    <section className="py-20 bg-[#03045e] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <span className="text-[#00b4d8] font-semibold uppercase tracking-wider">
              Video Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Discover the Platform Through a Video Tour
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Take a virtual tour of our platform and see how Laziya Online Academy can
              transform your education.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full flex items-center"
            >
              <PlayCircle size={20} className="mr-2" />
              Watch Video Tour
            </Button>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00b4d8] to-transparent opacity-20 rounded-xl"></div>
              <div className="relative bg-gray-800 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <button className="relative z-10 bg-[#00b4d8] hover:bg-[#03045e] text-white p-5 rounded-full transition-colors duration-300">
                  <PlayCircle size={40} />
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00b4d8] opacity-20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#caf0f8] opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
