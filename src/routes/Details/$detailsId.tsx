import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import LayoutWrapper from '../../components/LayoutWrapper'
import { Button } from '../../components/ui/Button'
import { products } from '../../mocks/data'
import { useCartStore } from '../../store/useCartStore'
import type { Product } from '../../types/Product'
import FormatToBRL from '../../utils/FormatCurrency'

export const Route = createFileRoute('/Details/$detailsId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { detailsId } = Route.useParams()
  const [productItem, setProductItem] = useState<Product>()
  const { addToCart } = useCartStore()

  useEffect(() => {
    const product = products.find((product) => product.id === detailsId);

    if (product) {
      setProductItem(product)
    }
  }, [detailsId])

  if (!productItem) return;

  return (
    <LayoutWrapper>
      <div className='w-full h-[calc(100%-52px)] pl-32 overflow-y-scroll mt-8 flex gap-20'>
        <div className='w-[576px] h-[656px] bg-linear-to-b from-[#1EA483] to-[#7465D4] rounded-lg flex justify-center items-center'>
          <img src={productItem.image} alt="Product" width={520} height={480} />
        </div>
        <div className='flex flex-col justify-between h-[656px]'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <h2 className='font-default font-bold text-4xl text-gray-4'>{productItem.name}</h2>
              <h2 className='font-default text-4xl text-product-light'>{productItem.price && FormatToBRL(productItem.price)}</h2>
            </div>
            <p className='text-wrap max-w-[520px] text-gray-4 font-default text-lg flex flex-col gap-8'>
              Tempus fermentum eget lacus, quis ante. Potenti sit pharetra, ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus donec hendrerit. Rhoncus, nunc, eu at ac.
              <span>
                At massa, fermentum amet ornare cras tincidunt nunc tincidunt. Netus lorem nulla nulla mattis integer velit dictum proin nibh.
              </span>
            </p>
          </div>
          <Button className='w-full' onClick={() => addToCart(productItem)}>Colocar na sacola</Button>
        </div>
      </div>
    </LayoutWrapper>
  )
}
