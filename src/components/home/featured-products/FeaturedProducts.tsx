import React from 'react'
import { BikeComponent } from './BikeComponent'

export const FeaturedProducts = () => {
  //   return (
  //     <div className='px-16 py-16'>
  //       <h3 className='text-3xl md:text-4xl text-center'>FeaturedProducts</h3>
  //       <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
  //         {Array.from({ length: 4 }).map((_, index) => (
  //           <div key={index} className='flex items-center justify-center'>
  //             <BikeComponent index={index} />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  return (
    <div className='px-16 py-16'>
      <h3 className='text-3xl md:text-4xl text-center'>FeaturedProducts</h3>
      <div className='flex flex-wrap justify-center items-start gap-8 mt-8'>
        {Array.from({ length: 4 }).map((_, index) => (
          <React.Fragment key={index}>
            <BikeComponent index={index} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
