import React from 'react'
import { Card } from '../components/UI/Card'
import { Button } from '../components/UI/Button'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
const teamMembers = [
  {
    name: 'Dr. Emily ',
    role: 'Founder & CEO',
    bio: 'Former educator with 15 years of experience and a passion for educational technology.',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    name: 'Michael ',
    role: 'Chief Technology Officer',
    bio: 'Software engineer with expertise in building secure, scalable educational platforms.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Sarah ',
    role: 'Head of Educational Design',
    bio: 'Curriculum specialist focused on creating intuitive educational experiences.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'David ',
    role: 'Customer Success Director',
    bio: 'Dedicated to ensuring schools get the most from the SchoolSync platform.',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
]
const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description:
      'Laziya was established with the mission to transform school management.',
  },
  {
    year: '2019',
    title: 'First School Partnership',
    description:
      'Launched our pilot program with 50 students across the country.',
  },
  {
    year: '2020',
    title: 'Remote Learning Features',
    description:
      'Expanded platform capabilities to support schools during the pandemic.',
  },
  {
    year: '2021',
    title: '100th School Milestone',
    description: 'Celebrated onboarding our 100th students to the platform.',
  },
  {
    year: '2022',
    title: 'Parent Portal Launch',
    description:
      'Released comprehensive tools for parent engagement and communication.',
  },
  {
    year: '2023',
    title: 'International Expansion',
    description: 'Began serving students from abroad.',
  },
]
export function About() {
  return (
    <div className="bg-[#caf0f8] bg-opacity-30 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#03045e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            To empower educational communities through technology that connects,
            streamlines, and enhances the learning experience for all
            stakeholders.
          </p>
        </div>
      </section>
      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-[#03045e] mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-6">
                At Laziya Online Academy, we envision a future where technology seamlessly
                supports education, allowing schools to focus on what matters
                most: teaching and learning. We believe in creating tools that
                are intuitive, accessible, and impactful.
              </p>
              <p className="text-gray-700 mb-6">
                Our platform is designed with input from educators,
                administrators, students, and parents to ensure it meets the
                real needs of a school Community.
              </p>
              <div className="space-y-3">
                {[
                  'Simplify administrative tasks',
                  'Enhance communication',
                  'Support data-driven decisions',
                  'Improve educational outcomes',
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-[#00b4d8] mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt="Students collaborating in a modern classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals working to transform educational
              technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} variant="elevated" className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#03045e]">
                    {member.name}
                  </h3>
                  <p className="text-[#00b4d8] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in Laziya's mission to transform education.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-4 md:mr-8">
                  <div className="bg-[#00b4d8] text-white font-bold py-2 px-4 rounded">
                    {milestone.year}
                  </div>
                </div>
                <div
                  className={`bg-white p-5 rounded-lg shadow flex-1 ${index % 2 === 0 ? 'border-l-4 border-[#00b4d8]' : 'border-l-4 border-[#03045e]'}`}
                >
                  <h3 className="font-bold text-[#03045e] text-lg">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#03045e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Discover how Laziya can transform your School operations and
            enhance your educational experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#03045e]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
