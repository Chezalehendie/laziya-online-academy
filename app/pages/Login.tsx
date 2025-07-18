import React from 'react'
import { LoginForm } from '../components/Forms/LoginForm'
import { Card } from '../components/UI/Card'
import CustomCursor from '../components/cursor/cursor'
export function Login() {
  return (
    <div className="min-h-screen bg-[#caf0f8] bg-opacity-30 py-12 pt-32">
      <div className="container mx-auto px-4">
        {/* custom cursor */}
        <CustomCursor />

        <div className="max-w-md mx-auto">
          <Card variant="elevated" className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#03045e]">
                Welcome Back
              </h1>
              <p className="text-gray-600 mt-2">
                Log in to access your account
              </p>
            </div>
            <LoginForm />
          </Card>
        </div>
      </div>
    </div>
  )
}
