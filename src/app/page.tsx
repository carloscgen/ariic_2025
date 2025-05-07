import { FeaturedProducts } from '@/components/home/featured-products/FeaturedProducts'
import { Reasons } from '@/components/home/reasons/Reasons'
import { SliderHome } from '@/components/home/SliderHome'
import { TechHighlights } from '@/components/home/tech-higlights/TechHighlights'

export default function Home() {
  return (
    <main>
      <SliderHome />
      <FeaturedProducts />
      <TechHighlights />
      <Reasons />
    </main>
  )
}
