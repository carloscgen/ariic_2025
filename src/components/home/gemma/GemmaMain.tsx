import React from 'react'
import { Play } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'

export const GemmaMain = () => {
  return (
    <div className='relative w-full h-full overflow-hidden'>
      {/* Imagen de fondo */}
      <img
        className='w-full h-auto object-cover'
        src='/home.jpg'
        alt='Gemma main background'
      />

      {/* agrego una capa oscura encima de la imagen de fondo */}
      <div className='absolute inset-0 bg-black/25'></div>

      {/* Imagen del título por encima */}
      <div className='flex flex-col items-start justify-start absolute bottom-[15%] left-[10%] animate-fade-right animate-duration-1000 animate-ease-in-out'>
        <img
          // className="absolute bottom-[25%] left-[15%] w-[250px] md:w-[400px] lg:w-[450px] animate-in slide-in-from-left fade-in duration-1000"
          className=' w-[250px] md:w-[400px] lg:w-[450px] '
          src='/title.png'
          alt='Título'
        ></img>
        <a href='#' className=' mt-4 bg-white/35 p-2 rounded-full text-white hover:animate-jump border-white border-1'>
          <Play className='w-3.5 h-3.5'/>
        </a>
      </div>
    </div>
  )
}
