import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outlined' | 'elevated' | 'modern'
  icon?: React.ReactNode
  title?: string
  description?: string
  link?: {
    href: string
    text: string
  }
}

export function Card({
  children,
  className = '',
  variant = 'default',
  icon,
  title,
  description,
  link,
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden'
  
  const variantStyles = {
    default: 'bg-white',
    outlined: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-md',
    modern: 'border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6',
  }

  //modern variant with structured content
  if (variant === 'modern' && (icon || title || description || link)) {
    return (
      <article className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {icon && (
          <span className="inline-block rounded-sm bg-[#00b4d8] p-2 text-white">
            {icon}
          </span>
        )}

        {title && (
          <h3 className="mt-0.5 text-lg font-medium text-[#03045e]">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {description}
          </p>
        )}

        {link && (
          <a 
            href={link.href} 
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00b4d8] hover:text-[#03045e] transition-colors"
          >
            {link.text}

            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        )}

        {children}
      </article>
    )
  }

  // Default card behavior for existing usage
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  )
}
