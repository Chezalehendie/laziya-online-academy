import React from 'react'
import Link from 'next/link'
import { Button } from '../UI/Button'

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#caf0f8] sm:grid sm:grid-cols-2 min-h-screen">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-[#03045e] md:text-3xl lg:text-4xl">
            Empowering Minds, Anywhere Anytime
          </h2>

          <p className="hidden text-gray-700 md:mt-4 md:block">
            Transform your learning experience with Laziya Online Academy. Our comprehensive platform connects students, teachers, and administrators, providing cutting-edge tools for modern education that adapts to your schedule and learning style.
          </p>

          <div className="mt-4 md:mt-8">
            <Link href="/signup">
              <Button 
                variant="secondary" 
                size="lg"
                className="inline-block rounded-sm bg-[#00b4d8] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#03045e] focus:ring-3 focus:ring-[#caf0f8] focus:outline-hidden"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <img
        alt="Students collaborating on a digital platform"
        src="https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA="
        className="h-64 w-full object-cover sm:h-screen"
      />
    </section>
  )
}
