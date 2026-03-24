import Logo from "../assets/Logo.png"
import { cn } from "../utils/cn";
import { Cart } from "./Cart";
import { Link } from "@tanstack/react-router";
import { useCartStore } from "../store/useCartStore";

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    const { items } = useCartStore()

    return (
        <header className={cn("flex items-center justify-between mr-32 pt-10", className)}>
            <Link to="/">
                <img src={Logo} alt="Logo" width={130} height={52} />
            </Link>
            <Cart chosenProducts={items} />
        </header>
    )
}