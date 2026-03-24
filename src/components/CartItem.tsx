import { Link } from "./ui/Link";

interface CartItemProps {
    imgUrl: string;
    productName: string;
    productPrice: string;
    removeProductItem: () => void;
}

export function CartItem({ imgUrl, productName, productPrice, removeProductItem }: CartItemProps) {
    return (
        <section className="pl-12 flex gap-5">
            <div className="w-[95px] h-[95px] bg-linear-to-b from-[#1EA483] to-[#7465D4] rounded-lg">
                <img src={imgUrl} alt="Product" />
            </div>
            <div className="h-[95px] flex flex-col justify-between">
                <div className="flex flex-col gap-0.5">
                    <h3 className="font-default text-gray-4 text-lg">{productName}</h3>
                    <h2 className="font-default font-bold text-gray-5 text-lg">{productPrice}</h2>
                </div>
                <Link onClick={removeProductItem}>Remover</Link>
            </div>
        </section>
    )
}