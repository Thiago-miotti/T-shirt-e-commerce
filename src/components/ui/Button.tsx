import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode;
}


export function Button({ children, ...props }: ButtonProps) {
    return <button {...props} className="bg-product-principal text-white font-default font-bold text-lg px-8 py-5 rounded-lg hover:bg-product-light cursor-pointer">{children}</button>;
}