import React from 'react'
import { FaqSection } from '../components/Contact/FaqSection'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <div className="bg-[#caf0f8] bg-opacity-30 min-h-screen pt-20">
      {/* Contact Section */}
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#03045e] sm:text-4xl lg:text-5xl">Contact us</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Have questions about Laziya Online Academy? Our team is here to help. Reach out
              using the form below or contact us directly.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <div className="flex-shrink-0 w-16 h-16 mx-auto text-white bg-[#00b4d8] rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <p className="mt-6 text-lg font-medium text-gray-900">+265 983020084</p>
                  <p className="mt-1 text-sm text-gray-600">Mon-Fri, 8am-6pm</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <div className="flex-shrink-0 w-16 h-16 mx-auto text-white bg-[#00b4d8] rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <p className="mt-6 text-lg font-medium text-gray-900">support@laziyaonlineacademy.com</p>
                  <p className="mt-1 text-sm text-gray-600">General inquiries</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <div className="flex-shrink-0 w-16 h-16 mx-auto text-white bg-[#00b4d8] rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">Area 49, Lilongwe, Malawi</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-[#03045e]">Send us a message</h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">Your name</label>
                      <div className="mt-2.5 relative">
                        <input 
                          type="text" 
                          placeholder="Enter your full name" 
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00b4d8] caret-[#00b4d8]" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Email address</label>
                      <div className="mt-2.5 relative">
                        <input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00b4d8] caret-[#00b4d8]" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Phone number</label>
                      <div className="mt-2.5 relative">
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00b4d8] caret-[#00b4d8]" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Subject</label>
                      <div className="mt-2.5 relative">
                        <input 
                          type="text" 
                          placeholder="Enter subject" 
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00b4d8] caret-[#00b4d8]" 
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-gray-900">Message</label>
                      <div className="mt-2.5 relative">
                        <textarea 
                          placeholder="Type your message here..." 
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-[#00b4d8] caret-[#00b4d8]" 
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button 
                        type="submit" 
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#00b4d8] border border-transparent rounded-md focus:outline-none hover:bg-[#03045e] focus:bg-[#03045e]"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-10 bg-[#03045e]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Support</h3>
            <p className="text-[#caf0f8] mb-6">
              For urgent technical issues affecting your operations - we're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+265983020084" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#03045e] bg-[#caf0f8] rounded-md hover:bg-white transition-colors duration-200"
              >
                <Phone size={20} className="mr-2" />
                Call +265 983020084
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#caf0f8] border border-[#caf0f8] rounded-md hover:bg-[#caf0f8] hover:text-[#03045e] transition-colors duration-200">
                Live Chat
              </button>
            </div>
            <p className="text-[#caf0f8] text-sm mt-4">Available 24/7</p>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="max-w-6xl mx-auto mt-12 bg-gray-200 rounded-lg overflow-hidden h-64 flex items-center justify-center">
        <p className="text-gray-500">
          [Map would be displayed here - Google Maps integration]
        </p>
      </div>

      <FaqSection />
    </div>
  )
}
