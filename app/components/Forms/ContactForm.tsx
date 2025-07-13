'use client'

import React, { useState } from 'react'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }
  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      
      console.log('Contact form submitted:', formData)
    
      setIsSubmitted(true)
    }
  }
  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-[#03045e] mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your message and will get back to you soon.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            })
            setIsSubmitted(false)
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Your Name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        fullWidth
        required
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        fullWidth
        required
      />
      <Input
        label="Subject"
        type="text"
        name="subject"
        placeholder="How can we help?"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        fullWidth
        required
      />
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Please describe how we can help you..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-[#00b4d8]
                    ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      <Button type="submit" variant="secondary" fullWidth>
        Send Message
      </Button>
    </form>
  )
}
