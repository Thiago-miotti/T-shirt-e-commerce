import { Link } from '@tanstack/react-router'
import type { ComponentProps, MouseEvent } from "react";
import { Button } from "./Button";
import { PiHandbag } from "react-icons/pi";

interface CardProps extends ComponentProps<"div"> {
    imgUrl: string;
    productName: string;
    productPrice: string;
    productId: number;
    onClick: () => void;
}

export function Card({ imgUrl, productName, productPrice, productId, onClick, ...props }: CardProps) {
    const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick();
    };

    return (
        <Link to={`/Details/${productId}`}>
            <div {...props} className="relative group min-w-[500px] bg-linear-to-b from-[#1EA483] to-[#7465D4] rounded-lg p-10 flex flex-col items-center justify-center hover:cursor-pointer">
                <img src={imgUrl} alt="Product" width={400} height={400} />

                <div className="absolute bottom-0 bg-gray-2 rounded-lg py-5 pl-5 pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[calc(100%-8px)] m-1 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-5 font-default font-bold text-xl">{productName}</h1>
                        <p className="text-product-light font-default font-bold text-2xl">{productPrice}</p>
                    </div>

                    <Button onClick={handleAddToCartClick} aria-label={`Adicionar ${productName} ao carrinho`}>
                        <PiHandbag className="size-6" />
                    </Button>
                </div>
            </div>
        </Link>
    );
}