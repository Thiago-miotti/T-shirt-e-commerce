import { createFileRoute } from '@tanstack/react-router'
import { DisplayProducts } from '../components/DisplayProducts'
import { products } from '../mocks/data'
import LayoutWrapper from '../components/LayoutWrapper'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LayoutWrapper>
      <section className="w-full h-[calc(100%-52px)] pl-32 flex flex-col justify-center gap-8 overflow-y-scroll">
        <DisplayProducts products={products} />
      </section>
    </LayoutWrapper>
  )
}
