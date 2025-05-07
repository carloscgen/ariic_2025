'use client'

import React from 'react'
// React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport. 
// Contains both a Hooks, render props and plain children implementation.
import { useInView } from 'react-intersection-observer'

export const Reasons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo una vez
    threshold: 0.1 // 10% del elemento visible
  })

  return (
    <div className='py-16 px-6 md:px-16' ref={ref}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800'>
        <div className={`${inView ? 'animate-fade-down animate-delay-600' : 'hidden'}`}>
          <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
            Why?
          </h3>
          <p className='text-center md:text-start'>
            Innovation drives us to push boundaries and explore new
            possibilities, ensuring that our motorcycles stand out in the
            market. Performance is at the core of our design philosophy, as we
            strive to deliver motorcycles that offer exceptional speed, agility,
            and handling.
          </p>
        </div>

        <div className={`${inView ? 'animate-fade-down animate-delay-600' : 'hidden'}`}>
          <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
            How
          </h3>
          <p className='text-center md:text-start'>
            As we meticulously craft each motorcycle with the utmost attention
            to detail and precision. With passion for motorcycle industry, we
            have relentlessly pursued innovation and excellence.
          </p>
        </div>

        <div className={`${inView ? 'animate-fade-down animate-delay-600' : 'hidden'}`}>
          <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
            Quality is not negotiable
          </h3>
          <p className='text-center md:text-start'>
            Our data-driven approach ensures our campaigns are both creative and
            effective, adapting to market changes. Our DNA is built upon three
            pillars: INNOVATION, PERFORMANCE, and QUALITY.
          </p>
        </div>

        <div className={`${inView ? 'animate-fade-down animate-delay-600' : 'hidden'}`}>
          <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
            Innovation-driven Designs
          </h3>
          <p className='text-center md:text-start'>
            Our dynamic team of creative designers is driven by a passion for
            innovation and thrives on collaborative efforts at every stage, from
            the initial drawings to the captivating final rendering.
          </p>
        </div>

        <div className={`${inView ? 'animate-fade-down animate-delay-600' : 'hidden'}`}>
          <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
            Global Presence
          </h3>
          <p className='text-center md:text-start'>
            Brand management is crucial to us. We have established guidelines
            that reflect our values, ensuring consistency in our marketing
            materials. Our ultimate goal is to create a global presence for
            Jinlang Power and ARIIC.
          </p>
        </div>

        <div className={`${inView ? 'animate-fade-down animate-delay-600' : 'hidden'}`}>
          <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
            Riders at center
          </h3>
          <p className='text-center md:text-start'>
            With our passion, creativity, and dedication, we will continue to
            make waves in the motorcycle industry, leaving a lasting impact on
            riders worldwide.
          </p>
        </div>
      </div>
    </div>
  )
}
