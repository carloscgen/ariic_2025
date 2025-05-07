'use client'

import { ArrowUp } from 'lucide-react'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-[#2a2f35] text-white px-10 py-14 text-sm'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left'>
        <div className='flex-1 space-y-2'>
          <p>Call Us: +86 576-82899389</p>
          <p>
            Address: No.1111, Jinlin Road, Jinqing Town, Luqiao District,
            Taizhou City, Zhejiang Province, China
          </p>
        </div>

        <div className='flex-1 space-y-2'>
          <p>Send an Email: larry@ariic-scooter.com</p>
          <p>
            Copyright: Jinlang Science And Technology 2023. All rights reserved.
          </p>
          <p>
            Vehicle specifications are subject to change without notice. ARIIC
            reserves the right to make improvements and design changes without
            any obligation to modify previously sold, assembled, or fabricated
            equipment.
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <a
            href='#'
            className='bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:animate-jump'
          >
            <FaInstagram />
          </a>
          <a
            href='#'
            className='bg-[#1877f2] p-3 rounded-full hover:animate-jump'
          >
            <FaFacebookF />
          </a>
          <a
            href='#'
            className='bg-[#0a66c2] p-3 rounded-full hover:animate-jump'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='#'
            className='bg-[#ff0000] p-3 rounded-full hover:animate-jump'
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-10 pt-10 text-center text-gray-400 text-xs'>
        COPYRIGHTS © 2023 WWW.JINLANG.COM.CN | WWW.ARIIC-SCOOTER.COM
      </div>

      <div className='fixed bottom-4 right-4'>
        <button
          className='bg-black/90 p-3 rounded text-white opacity-80 hover:bg-black/75 cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp />
        </button>
      </div>
    </footer>
  )
}
