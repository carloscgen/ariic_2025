'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'

export const GemmaHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo una vez
    threshold: 0.7 // 70% del elemento visible
  })

  return (
    <section className='relative w-full bg-gray-50 py-24 px-4 md:px-48' ref={ref}>
      <img
        src='/products/gemma/section1.jpg'
        alt='Gemma Scooter'
        className='w-full object-cover h-auto'
      />

      {/* Texto superpuesto en desktop, debajo en mobile */}
      <div className={`static mt-6 border-none ${inView  ? 'animate-fade-up lg:animate-fade-left animate-delay-500' : 'hidden'} lg:rounded-lg lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:bg-white lg:border lg:border-gray-400 lg:p-6 lg:max-w-xs lg:shadow-lg lg:mt-0`}>
        <p className='text-gray-800 text-base leading-relaxed'>
          <strong>Gemma Scooter</strong> embodies power, resilience, and
          unwavering brilliance. An extension of your unique personality that
          lets the world know you're here to shine.
        </p>
      </div>
    </section>
  )
}
