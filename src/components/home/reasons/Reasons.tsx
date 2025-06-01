'use client'

import React from 'react'
// React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport.
// Contains both a Hooks, render props and plain children implementation.
import { useInView } from 'react-intersection-observer'

export const Reasons = ({
  reasonsTexts
}: {
  reasonsTexts: { title: string; text: string }[]
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo una vez
    threshold: 0.1 // 10% del elemento visible
  })

  return (
    <div className='py-16 px-6 md:px-16' ref={ref}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800'>
        {reasonsTexts &&
          reasonsTexts.map((reason, index) => (
            <div
              key={index}
              className={`${
                inView ? 'animate-fade-down animate-delay-600' : 'hidden'
              }`}
            >
              <h3 className='text-center md:text-start font-semibold text-lg mb-2'>
                {reason.title}
              </h3>
              <p className='text-center md:text-start'>{reason.text}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
