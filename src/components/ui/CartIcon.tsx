import type { ComponentProps } from "react";
import { PiHandbag } from "react-icons/pi";

interface CartIconProps extends ComponentProps<"div"> {
    count: number
}

export function CartIcon({ count, ...props }: CartIconProps) {
    return (
        <div {...props} className={`relative inline-flex`}>
            <div className="p-3 bg-gray-2 rounded-md w-12 h-12 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                <PiHandbag className={`${count >= 0 ? 'text-gray-4' : 'text-gray-3'}  size-6`} />
                {count > 0 && (
                    <div className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-product-principal font-default font-bold text-white">
                        {count}
                    </div>
                )}
            </div>
        </div>
    )
}
