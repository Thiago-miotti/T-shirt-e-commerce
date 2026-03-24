import type { ComponentProps, ReactNode } from "react";

interface LinkProps extends ComponentProps<"a"> {
    children: ReactNode;
}


export function Link({ children, ...props }: LinkProps) {
    return (
        <a {...props} className="text-product-principal hover:text-product-light text-xl font-bold cursor-pointer">
            {children}
        </a>
    );
}