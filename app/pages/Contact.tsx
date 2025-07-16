import React from 'react'
import { ContactForm } from '../components/Forms/ContactForm'
import { FaqSection } from '../components/Contact/FaqSection'
import { Card } from '../components/UI/Card'
import { Mail, Phone, MapPin } from 'lucide-react'
export function Contact() {
  return (
    <div className="bg-[#caf0f8] bg-opacity-30 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#03045e] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about Laziya Online Academy? Our team is here to help. Reach out
            using the form below or contact us directly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card variant="elevated" className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#03045e] mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </Card>
          </div>
          <div>
            <Card variant="elevated" className="p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#03045e] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#00b4d8] bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">support@laziyaonlineacademy.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#00b4d8] bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+265 983020084</p>
                    <p className="text-gray-600">Mon-Fri, 8am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#00b4d8] bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      Area 49, Lilongwe, Malawi
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="bg-[#03045e] text-white p-6 rounded-lg">
              <h3 className="font-bold mb-2">Emergency Support</h3>
              <p className="text-sm opacity-90 mb-4">
                For urgent technical issues affecting your operations:
              </p>
              <p className="font-medium">+265 983020084</p>
              <p className="text-sm opacity-90">Available 24/7</p>
            </div>
          </div>
        </div>
        {/* Map placeholder */}
        <div className="max-w-6xl mx-auto mt-12 bg-gray-200 rounded-lg overflow-hidden h-64 flex items-center justify-center">
          <p className="text-gray-500">
            [Map would be displayed here - Google Maps integration]
          </p>
        </div>
        <FaqSection />
      </div>
    </div>
  )
}
