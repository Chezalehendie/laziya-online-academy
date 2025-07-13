import React from 'react'
import Link from 'next/link'
import { HeroSection } from '../components/Home/HeroSection'
import { FeatureSection } from '../components/Home/FeatureSection'
import { TestimonialSection } from '../components/Home/TestimonialSection'
import { StatsSection } from '../components/Home/StatsSection'
import { Button } from '../components/UI/Button'
export function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of students already using Laziya Online Academy to enhance
            their learning experience and achieve their educational goals.
          </p>
          <Link href="/signup">
            <Button variant="secondary" size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
