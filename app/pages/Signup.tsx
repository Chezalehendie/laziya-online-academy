import React from 'react'
import { SignupForm } from '../components/Forms/SignupForm' 
import { Card } from '../components/UI/Card'
export function Signup() {
  return (
    <div className="min-h-screen bg-[#caf0f8] bg-opacity-30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <Card variant="elevated" className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#03045e]">
                Create an Account
              </h1>
              <p className="text-gray-600 mt-2">
                Join our school management system
              </p>
            </div>
            <SignupForm />
          </Card>
        </div>
      </div>
    </div>
  )
}
