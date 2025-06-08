import { GemmaHero } from '@/components/home/gemma/GemmaHero'
import { GemmaMain } from '@/components/home/gemma/GemmaMain'
import { Reasons } from '@/components/home/reasons/Reasons'
import { LookbookGrid } from '@/components/LookbookGrid'
import { PromoSection } from '@/components/PromoSection'

export default function Bike318() {
  const reasonsTexts = [
    {
      title: 'Unmatched performance',
      text: `GEMMA is a joy to ride. The powerful engine delivers exhilarating acceleration, while the responsive handling makes carving through corners effortless. Whether you're cruising down city streets or exploring winding country roads, GEMMA will take you there in style and comfort.`
    },
    {
      title: 'Gemma is the future',
      text: `In the spirit of rebellion, GEMMA breaks free from the traditional scooter mold. It's a bold departure from the familiar, offering riders a fresh perspective on the joy of two-wheeled travel.`
    },
    {
      title: 'God is in the details',
      text: 'From the sculpted headlight to the integrated taillight, every detail is meticulously crafted to create a visually stunning masterpiece.'
    },
    {
      title: 'Uncompromising quality',
      text: 'Every component of GEMMA is built to the highest standards. From the lightweight yet robust aluminum frame to the powerful and efficient engine. GEMMA is designed to last, ensuring years of riding enjoyment.'
    },
    {
      title: 'Sleek design',
      text: 'With its sleek design, robust frame, and comfortable ride, you can easily conquer any terrain.'
    },
    {
      title: 'Are you ready to ride the future?',
      text: `Ultimately, GEMMA is the scooter for those who dare to be different. It's for the trendsetters, the innovators, and the individuals who refuse to settle for the ordinary. It's for those who want to turn heads and leave a lasting impression.`
    }
  ]

  const imagesLookBookGrid = [
    'products/gemma/1-1.jpg',
    'products/gemma/1-2.jpg',
    'products/gemma/1-3.jpg',
    'products/gemma/1-4.jpg',
    'products/gemma/1-5.jpg'
  ]

  const hero_1 = {
    strong: 'Gemma Scooter',
    text: `embodies power, resilience, and unwavering brilliance. An extension of your unique personality that lets the world know you're here to shine.`,
    img: '/products/gemma/section1.jpg'
  }

  const hero_2 = {
    strong: 'Gemma Scooter',
    text: `is the diamond of scooters. It's a rare and precious gem that will turn heads and leave a lasting impression. If you're looking for a scooter that's as unique and special as you are, look no further than GEMMA.`,
    img: '/products/gemma/section2.jpg'
  }

  return (
    <div>
      <GemmaMain />
      <GemmaHero hero={hero_1} />
      <Reasons reasonsTexts={reasonsTexts} />
      <LookbookGrid images={imagesLookBookGrid} />
      <PromoSection text={'SHINE BRIGHT'} />
      <GemmaHero hero={hero_2} />
      <PromoSection text={'VEHICLE SPECIFICATION'} />
      <GemmaHero hero={null} />
    </div>
  )
}
