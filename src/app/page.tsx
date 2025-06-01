import { FeaturedProducts } from '@/components/home/featured-products/FeaturedProducts'
import { Reasons } from '@/components/home/reasons/Reasons'
import { SliderHome } from '@/components/home/SliderHome'
import { TechHighlights } from '@/components/home/tech-higlights/TechHighlights'

export default function Home() {
  const reasonsTexts = [
    {
      title: 'Why?',
      text: 'Innovation drives us to push boundaries and explore new possibilities, ensuring that our motorcycles stand out in the market. Performance is at the core of our design philosophy, as we strive to deliver motorcycles that offer exceptional speed, agility, and handling.'
    },
    {
      title: 'How',
      text: 'As we meticulously craft each motorcycle with the utmost attention to detail and precision. With passion for motorcycle industry, we have relentlessly pursued innovation and excellence.'
    },
    {
      title: 'Quality is not negotiable',
      text: 'Our data-driven approach ensures our campaigns are both creative and effective, adapting to market changes. Our DNA is built upon three pillars: INNOVATION, PERFORMANCE, and QUALITY.'
    },
    {
      title: 'Innovation-driven Designs',
      text: 'Our dynamic team of creative designers is driven by a passion for innovation and thrives on collaborative efforts at every stage, from the initial drawings to the captivating final rendering.'
    },
    {
      title: 'Global Presence',
      text: 'Brand management is crucial to us. We have established guidelines that reflect our values, ensuring consistency in our marketing materials. Our ultimate goal is to create a global presence for Jinlang Power and ARIIC.'
    },
    {
      title: 'Riders at center',
      text: 'With our passion, creativity, and dedication, we will continue to make waves in the motorcycle industry, leaving a lasting impact on riders worldwide.'
    }
  ]
  return (
    <main>
      <SliderHome />
      <FeaturedProducts />
      <TechHighlights />
      <Reasons reasonsTexts={reasonsTexts} />
    </main>
  )
}
