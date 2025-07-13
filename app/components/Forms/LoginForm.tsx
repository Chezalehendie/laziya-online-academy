'use client'

import React, { useState } from 'react'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import Link from 'next/link'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
export function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      
      console.log('Login form submitted:', formData)
      
      alert(`Login attempted with ${formData.email} as ${formData.role}`)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          fullWidth
          required
        />
      </div>
      <div className="relative">
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          fullWidth
          required
        />
        <button
          type="button"
          className="absolute right-3 top-9 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
        </button>
      </div>
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          I am a
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-[#00b4d8]"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
      <div className="text-right">
        <Link
          href={"/forgot-password"}
          className="text-sm text-[#00b4d8] hover:underline"
        >
          Forgot your password?
        </Link>
      </div>
      <Button type="submit" variant="secondary" fullWidth>
        Log In
      </Button>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href={"/signup"} className="text-[#00b4d8] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}
