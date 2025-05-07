'use client'

import React from 'react'
import CountUp from 'react-countup'
// React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport. 
// Contains both a Hooks, render props and plain children implementation.
import { useInView } from 'react-intersection-observer'

export const TechHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo una vez
    threshold: 0.7,    // 70% del elemento visible
  })

  return (
    <div className="bg-gray-800 text-white py-16" ref={ref}>
      <h2 className="text-center text-2xl font-semibold mb-10">TECH HIGHLIGHTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-lg">
        <div>
          <span className="font-bold text-xl">
            {inView && <CountUp end={25} duration={2} />}
          </span>{' '}
          Years Experience
        </div>
        <div>
          <span className="font-bold text-xl">
            {inView && <CountUp end={400} duration={2} />}
          </span>{' '}
          Employees
        </div>
        <div>
          <span className="font-bold text-xl">
            {inView && <CountUp end={735000} duration={2.5} separator="," />}
          </span>{' '}
          Engines each year
        </div>
        <div>
          <span className="font-bold text-xl">
            {inView && <CountUp end={60000} duration={2.5} separator="," />}
          </span>{' '}
          Vehicles each year
        </div>
      </div>
    </div>
  )
}
