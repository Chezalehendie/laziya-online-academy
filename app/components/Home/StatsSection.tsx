import React from 'react'
const stats = [
  {
    value: '20+',
    label: 'Subjects',
  },
  {
    value: '25+',
    label: 'Teachers',
  },
  {
    value: '500+',
    label: 'Students',
  },
  {
    value: '98%',
    label: 'Satisfaction',
  },
]
export function StatsSection() {
  return (
    <section className="py-16 bg-[#03045e] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-[#00b4d8] mb-2">
                {stat.value}
              </div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
