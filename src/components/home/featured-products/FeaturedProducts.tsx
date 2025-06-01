import React from 'react'
import { BikeComponent } from './BikeComponent'
import Link from 'next/link'

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

  const bikesPage = [
    {
      id: 0,
      name: '318',
      image: '/products/bike_0.png',
      url: '/318',
    },
    {
      id: 1,
      name: 'Gemma',
      image: '/products/bike_1.png',
      url: '/gemma',
    },
    {
      id: 2,
      name: 'Julio',
      image: '/products/bike_2.png',
      url: '/julio',
    },
    {
      id: 3,
      name: 'Brio',
      image: '/products/bike_3.png',
      url: '/brio',
    },

  ]

  return (
    <div className='px-16 py-16'>
      <h3 className='text-3xl md:text-4xl text-center'>FeaturedProducts</h3>
      <div className='flex flex-wrap justify-center items-start gap-8 mt-8'>
        {bikesPage.map((bike) => (
          <React.Fragment key={bike.id}>
            <Link href={bike.url}>
              <BikeComponent index={bike.id} img={bike.image} />
            </Link>
            </React.Fragment>
        ))}

        {/* {/* {Array.from({ length: 4 }).map((_, index) => (
          <React.Fragment key={index}>
            <BikeComponent index={index} />
          </React.Fragment>
        ))} */}
      </div>
    </div>
  )
}
