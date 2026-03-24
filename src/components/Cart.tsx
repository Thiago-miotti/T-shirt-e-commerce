import { MdClose } from "react-icons/md";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/Drawer";
import { useCartStore } from "../store/useCartStore";
import type { Product } from "../types/Product";
import FormatToBRL from "../utils/FormatCurrency";
import { CartItem } from "./CartItem";
import { Button } from "./ui/Button";
import { CartIcon } from "./ui/CartIcon";
import { useNavigate } from "@tanstack/react-router";

interface CartProps {
    chosenProducts: Product[];
}

export function Cart({ chosenProducts }: CartProps) {
    const { removeFromCart } = useCartStore()
    const navigate = useNavigate()

    function totalValue() {
        const initialValue = 0;
        const prices = chosenProducts.map((p) => p.price)

        const total = prices.reduce((acc, curr) => acc + curr, initialValue)

        return FormatToBRL(total);
    }

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <CartIcon count={chosenProducts.length} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="mb-4">
                    <div className="w-full flex justify-end">
                        <DrawerClose>
                            <MdClose className="size-6 text-gray-3 cursor-pointer" />
                        </DrawerClose>
                    </div>
                    <DrawerTitle className="font-default font-bold tex-xl text-gray-5 pl-8">Carrinho</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-8">
                    {chosenProducts?.map((product) => (
                        <CartItem key={product.id} imgUrl={product.image} productName={product.name} productPrice={FormatToBRL(product.price)} removeProductItem={() => removeFromCart(Number(product.id))} />
                    ))}
                </div>
                <DrawerFooter className="flex flex-col gap-14">
                    <div className="w-full flex flex-col gap-1">
                        <div className="flex justify-between">
                            <h3 className="font-default text-gray-4">Quantidade</h3>
                            <h3 className="font-default text-gray-4">{chosenProducts.length} itens</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="font-default font-bold text-gray-5 text-lg">Valor Total</h3>
                            <h3 className="font-default font-bold text-gray-5 text-2xl">{totalValue()}</h3>
                        </div>
                    </div>
                    <Button onClick={() => navigate({ to: '/purchaseCompleted' })}>Finalizar Compra</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}