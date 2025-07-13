import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    primary: 'bg-[#03045e] text-white hover:bg-[#030450] focus:ring-[#03045e]',
    secondary:
      'bg-[#00b4d8] text-white hover:bg-[#00a3c4] focus:ring-[#00b4d8]',
    outline:
      'border border-[#03045e] text-[#03045e] hover:bg-[#caf0f8] focus:ring-[#03045e]',
  }
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }
  const disabledStyles = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'cursor-pointer'
  const widthStyles = fullWidth ? 'w-full' : ''
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
