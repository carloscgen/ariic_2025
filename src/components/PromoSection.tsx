import React from 'react'

interface ITextProp {
  text: string
}

export const PromoSection = ({ text }: ITextProp) => {
  return (
    <div className='w-full bg-gray-700'>
      <p className='text-lg text-white font-bold text-center p-12'>{text}</p>
    </div>
  )
}
