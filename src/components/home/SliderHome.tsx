'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Play } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

export const SliderHome = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 4000
          })
        ]}
        className='w-full h-full'
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className='p-0 m-0'>
              <Card className='border-none p-0'>
                <CardContent className='flex items-center justify-center p-0 w-full'>
                  <div className='relative'>
                    <img
                      src={`slider/${index + 1}.jpg`}
                      alt='Image'
                      className='w-full h-auto object-cover'
                    />
                    {/* agrego una capa oscura encima de la imagen de fondo */}
                    <div className='absolute inset-0 bg-black/15'></div>

                    <div className='flex flex-col items-start justify-start absolute bottom-[10%] left-[10%] animate-fade-right animate-duration-1000 animate-ease-in-out'>
                      <img
                        // className="absolute bottom-[25%] left-[15%] w-[250px] md:w-[400px] lg:w-[450px] animate-in slide-in-from-left fade-in duration-1000"
                        className=' w-[150px] md:w-[350px] lg:w-[380px] '
                        src={`slider/${index + 1}b.png`}
                        alt='Título'
                      ></img>
                      <Button
                        variant='ghost'
                        className='rounded-full bg-black/55 text-white hover:animate-jump border-white border-1 mt-2 cursor-pointer px-2 py-1 md:px-4 md:py-2'
                      >
                        <Link href='/'>More Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden' />
        <CarouselNext className='hidden' />
      </Carousel>
    </div>
  )
}
