import React from 'react'
import { Card } from '../UI/Card'
import { Star } from 'lucide-react'
const testimonials = [
  {
    quote:
      'Laziya Onlie Academy has transformed how we manage our school. The administrative burden has been reduced by 40%, giving us more time to focus on education.',
    author: 'Mr. Banda',
    role: 'School Principal',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      "As a teacher, I can now track student progress more effectively and communicate with parents seamlessly. It's been a game-changer for my classroom.",
    author: 'Michael Chisi',
    role: 'High School Teacher',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'Being able to check my grades and assignments in one place has helped me stay organized. The reminders about upcoming deadlines are super helpful!',
    author: 'Emma Chilangwe',
    role: 'Student',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/26.jpg',
  },
  {
    quote:
      "I love having real-time updates about my children's performance. The parent-teacher communication feature has improved our involvement in their education.",
    author: 'Robert Chiwamba',
    role: 'Parent',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/57.jpg',
  },
]
export function TestimonialSection() {
  return (
    <section className="py-16 bg-[#caf0f8] bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Laziya Online Academy is making a difference as an educational
            Community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="elevated" className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#00b4d8" color="#00b4d8" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#03045e]">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
