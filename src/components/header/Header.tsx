'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils' // si no usás esta función, podés combinar clases con template strings

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-colors duration-300 backdrop-blur border-b',
        scrolled
          ? 'bg-white/70 border-gray-200 shadow-sm py-2'
          : 'bg-white/35 border-transparent py-1'
      )}
    >
      <div className='max-w-7xl mx-auto px-5 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-xl font-bold text-gray-800'>
          <img className='w-20 h-full cursor-pointer' src='/logo.png' alt='Logo' />
        </div>

        {/* Navegación */}
        <nav className='flex space-x-6 text-sm font-medium text-gray-700'>
          <Link
            href='/'
            className='hover:text-white hover:scale-110 transition-colors font-semibold'
          >
            Home
          </Link>
          <Link href='/about' className='hover:text-white hover:scale-110 transition-colors font-semibold'>
            About Us
          </Link>
          <Link
            href='/products'
            className='hover:text-white hover:scale-110 transition-colors font-semibold'
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  )
}
