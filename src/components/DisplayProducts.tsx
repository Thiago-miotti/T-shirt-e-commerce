import { useCartStore } from "../store/useCartStore"
import type { Product } from "../types/Product"
import FormatToBRL from "../utils/FormatCurrency"
import { Card } from "./ui/Card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/Carousel"

interface DisplayProductsProps {
    products: Product[]
}

export function DisplayProducts({ products }: DisplayProductsProps) {
    const { addToCart } = useCartStore()

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full relative"
        >
            <CarouselContent className="w-full flex gap-16">
                {products.map((product) => (
                    <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/3">
                        <Card imgUrl={product.image} productName={product.name} productPrice={FormatToBRL((product.price))} productId={Number(product.id)} onClick={() => addToCart(product)} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div
                className="absolute right-0 top-0 bottom-0 w-16 flex items-center justify-center bg-linear-to-r from-transparent to-gray-1"
                aria-hidden
            >
                <CarouselNext className="relative! top-auto! right-auto! translate-y-0!" />
            </div>
            <div
                className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center bg-linear-to-l from-transparent to-gray-1/80"
                aria-hidden
            >
                <CarouselPrevious className="relative! top-auto! left-auto! translate-y-0!" />
            </div>
        </Carousel>
    )
}

