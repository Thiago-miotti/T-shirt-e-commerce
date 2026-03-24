import type { Product } from "../types/Product";
import TShirt1 from "../assets/T-shirt1.png";
import ExplorerTShirt from "../assets/2_explorer-t-shirt 1.png";
import IgniteLabTShirt from "../assets/Property 1=IgniteLab-T-shirt 1.png";
import CamisaMaratona from "../assets/Property 1=Camisa-Maratona 1.png";
import IgniterAbord2TShirt from "../assets/Property 1=Igniter-abord-2-t-shirt 1.png";

const products: Product[] = [
    {
        id: "1",
        name: "Camiseta Beyond the Limits",
        price: 79.90,
        image: TShirt1
    },
    {
        id: "2",
        name: "Camiseta Beyond the space",
        price: 53.50,
        image: ExplorerTShirt
    },
    {
        id: "3",
        name: "Camiseta time is nothing",
        price: 69.40,
        image: IgniteLabTShirt
    },
    {
        id: "4",
        name: "Camiseta stars journey",
        price: 25.50,
        image: CamisaMaratona
    },
    {
        id: "5",
        name: "Camiseta control your life",
        price: 25.50,
        image: IgniterAbord2TShirt
    },
]


export { products };