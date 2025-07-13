import React from 'react'
import { Card } from '../UI/Card'
import {
  BookOpen,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Shield,
} from 'lucide-react'
const features = [
  {
    title: 'Grade Management',
    description:
      'Easily track and manage student grades with intuitive tools for teachers and real-time updates for students and parents.',
    icon: <BookOpen size={32} className="text-[#00b4d8]" />,
  },
  {
    title: 'Attendance Tracking',
    description:
      'Automated attendance system with instant notifications to parents about absences and tardiness.',
    icon: <Calendar size={32} className="text-[#00b4d8]" />,
  },
  {
    title: 'Communication Portal',
    description:
      'Seamless communication between teachers, students, and parents through messaging, announcements, and updates.',
    icon: <MessageSquare size={32} className="text-[#00b4d8]" />,
  },
  {
    title: 'Performance Analytics',
    description:
      'Comprehensive dashboards and reports to visualize student performance and identify improvement areas.',
    icon: <BarChart3 size={32} className="text-[#00b4d8]" />,
  },
  {
    title: 'User Management',
    description:
      'Role-based access control for administrators, teachers, students, and parents with customizable permissions.',
    icon: <Users size={32} className="text-[#00b4d8]" />,
  },
  {
    title: 'Data Security',
    description:
      'Enterprise-grade security measures ensuring all educational data remains private and protected.',
    icon: <Shield size={32} className="text-[#00b4d8]" />,
  },
]
export function FeatureSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive tools help streamline school operations and
            enhance the educational experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="elevated"
              className="p-6 hover:shadow-lg transition-shadow duration-300 bg-[#caf0f8] bg-opacity-30"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#03045e] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
