'use client'

import { Badge } from '@/components/ui/badge'
import React from 'react'

export const BikeComponent = ({ index = 0, img = '', img2 = '' }) => {
  return (
      <div className='flex flex-col justify-center items-center animate-fade animate-delay-500'>
        {index < 2 ? (
          <Badge className='opacity-0 mb-4 w-12'>Badge</Badge>
        ) : (
          <Badge className='mb-4 w-12 text-center'>New</Badge>
        )}
        <div className='flex'>
          <img
            src={`${img}`}
            alt='Bike'
            className='object-cover max-w-[270px] max-h-[200px] rounded-lg shadow-lg cursor-pointer hover:scale-102 transition-transform duration-300 ease-in-out'
          />
          {index > 0 && index < 3 && (
            <div className='hidden md:block ml-8 h-48 w-px bg-gray-300' />
          )}
        </div>
        <img src={img2} alt={'bike logo'} className='w-32 object-cover mt-8' />
      </div>
  )
}
