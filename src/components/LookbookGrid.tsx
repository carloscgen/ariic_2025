import React from 'react'

interface IImageProps {
  images: string[]
}

// export const LookbookGrid = ({ images }: IImageProps) => {
//   return (
//     <div className='py-16 px-6 md:px-16'>
//       <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
//         {images.map((img, index) => {
//           // Para la tercera y cuarta imagen (índice 2 y 3), las apilamos en col 3 en desktop
//           if (index === 2 || index === 3) {
//             return (
//               <div
//                 key={index}
//                 className={`${
//                   index === 2
//                     ? 'md:row-start-1 md:col-start-3'
//                     : 'md:row-start-2 md:col-start-3'
//                 }`}
//               >
//                 <img
//                   src={`/${img}`}
//                   alt={`Imagen ${index + 1}`}
//                   className='w-full h-auto object-cover'
//                 />
//               </div>
//             )
//           }

//           // Para el resto
//           return (
//             <div key={index}>
//               <img
//                 src={`/${img}`}
//                 alt={`Imagen ${index + 1}`}
//                 className='w-full h-auto object-cover'
//               />
//             </div>
//           )
//         })}
//       </section>
//     </div>
//   )
// }

// export const LookbookGrid = ({ images }: IImageProps) => {
//   return (
//     <div className='py-16 px-6 md:px-16'>
//       <section className='grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr'>
//         {images.map((img, index) => {
//           // Columna 3 con stack de 2 imágenes (índices 2 y 3)
//           if (index === 2) {
//             return (
//               <div
//                 key='col3'
//                 className='hidden md:flex flex-col gap-4 md:col-start-3 md:row-span-1 h-full'
//               >
//                 {[2, 3].map((i) => (
//                   <div key={i} className='h-1/2'>
//                     <img
//                       src={`/${images[i]}`}
//                       alt={`Imagen ${i + 1}`}
//                       className='w-full h-full object-cover hover:scale-102'
//                     />
//                   </div>
//                 ))}
//               </div>
//             )
//           }

//           // Skip index 3 (ya lo renderizamos arriba)
//           if (index === 3) return null

//           return (
//             <div key={index} className='h-full'>
//               <img
//                 src={`/${img}`}
//                 alt={`Imagen ${index + 1}`}
//                 className='w-full h-full object-cover hover:scale-102 transition-transform shadow-2xl'
//               />
//             </div>
//           )
//         })}
//       </section>
//     </div>
//   )
// }

export const LookbookGrid = ({ images }: IImageProps) => {
  return (
    <div className='py-16 px-6 md:px-16'>
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {/* Imagen 0 → Columna 1 en desktop, visible siempre */}
        <div>
          <img
            src={`/${images[0]}`}
            alt='Imagen 1'
            className='w-full h-full object-cover hover:scale-102 transition-transform shadow-2xl'
          />
        </div>

        {/* Imagen 1 → Columna 2 en desktop, visible siempre */}
        <div>
          <img
            src={`/${images[1]}`}
            alt='Imagen 2'
            className='w-full h-full object-cover hover:scale-102 transition-transform shadow-2xl'
          />
        </div>

        {/* Columna 3 (índices 2 y 3) → solo en desktop */}
        <div className='hidden md:flex flex-col gap-4'>
          <img
            src={`/${images[2]}`}
            alt='Imagen 3'
            className='w-full h-full object-cover hover:scale-102 transition-transform shadow-2xl'
          />
          <img
            src={`/${images[3]}`}
            alt='Imagen 4'
            className='w-full h-full object-cover hover:scale-102 transition-transform shadow-2xl'
          />
        </div>

        {/* Imagen 4 → Columna 4 en desktop, última en mobile */}
        <div>
          <img
            src={`/${images[4]}`}
            alt='Imagen 5'
            className='w-full h-full object-cover hover:scale-102 transition-transform shadow-2xl'
          />
        </div>
      </section>
    </div>
  )
}

