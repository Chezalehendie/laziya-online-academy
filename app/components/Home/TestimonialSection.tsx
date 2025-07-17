'use client'
import React from 'react'

const testimonials = [
  {
    quote: "Laziya Online Academy has transformed how we manage our school. The administrative burden has been reduced by 40%, giving us more time to focus on education.",
    author: "Mr. Banda",
    role: "School Principal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    quote: "As a teacher, I can now track student progress more effectively and communicate with parents seamlessly. It's been a game-changer for my classroom.",
    author: "Michael Chisi",
    role: "High School Teacher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    quote: "Being able to check my grades and assignments in one place has helped me stay organized. The reminders about upcoming deadlines are super helpful!",
    author: "Emma Chilangwe",
    role: "Student",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    quote: "I love having real-time updates about my children's performance. The parent-teacher communication feature has improved our involvement in their education.",
    author: "Robert Chiwamba",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    quote: "The platform's intuitive design makes it easy for students to navigate and access their learning materials. Our engagement rates have increased significantly.",
    author: "Grace Mwale",
    role: "Academic Coordinator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-[#00b4d8]">500+</span> students
          </h2>
          <p className="mt-4 text-base text-gray-600">
            See how Laziya Online Academy is transforming education across Malawi
          </p>
        </div>

        {/* Horizontal scrolling container */}
        <div className="mt-8 sm:mt-12 lg:mt-20">
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-72 sm:w-80 snap-start">
                <div className="overflow-hidden bg-white rounded-md shadow h-full">
                  <div className="px-6 py-8">
                    <div className="relative w-20 h-20 mx-auto">
                      <img 
                        className="relative object-cover w-20 h-20 mx-auto rounded-full" 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.author}&background=00b4d8&color=fff&size=80`;
                        }}
                      />
                      <div className="absolute top-0 right-0 flex items-center justify-center bg-[#00b4d8] rounded-full w-6 h-6">
                        <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <blockquote className="mt-5">
                      <p className="text-base text-black leading-relaxed">"{testimonial.quote}"</p>
                    </blockquote>
                    <p className="text-sm font-semibold text-black mt-6">{testimonial.author}</p>
                    <p className="mt-1 text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-6">
            <p className="text-sm text-gray-500">← Scroll to see more testimonials →</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
