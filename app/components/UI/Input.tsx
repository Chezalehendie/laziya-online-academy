import React from 'react'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}
export function Input({
  label,
  error,
  className = '',
  fullWidth = false,
  ...props
}: InputProps) {
  const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`
  const widthClass = fullWidth ? 'w-full' : ''
  return (
    <div className={`mb-4 ${widthClass}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-[#00b4d8]
                   ${error ? 'border-red-500' : 'border-gray-300'} 
                   ${widthClass} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
