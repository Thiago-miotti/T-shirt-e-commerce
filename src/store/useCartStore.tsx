import { create } from 'zustand'
import type { Product } from '../types/Product';
import { persist } from 'zustand/middleware'

const initialState = { items: [] as Product[] }

type CartState = typeof initialState & {
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    resetCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
        ...initialState,
        addToCart: (product) => set((state) => ({
            items: [...state.items, product]
        })),
        removeFromCart: (id) => set((state) => ({
            items: state.items.filter((item) => Number(item.id) !== id)
        })),
        resetCart: () => set(initialState)
    }),
        { name: 'cart-storage' },
    ),
)