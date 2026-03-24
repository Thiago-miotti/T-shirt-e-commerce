import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/ui/Card";
import TShirt from "../assets/T-shirt1.png"
import { Skeleton } from "../components/ui/Skeleton";

const meta: Meta<typeof Card> = {
    component: Card,
    title: "UI/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        imgUrl: TShirt,
        productName: "Camiseta",
        productPrice: "R$ 100,00",
    },
};

export const SkeletonCard: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4 bg-gray-2 rounded-lg p-10 w-[500px] h-[500px]">
            <Skeleton className="w-[400px] h-[400px] bg-gray-3" />
            <div className="flex items-center justify-between w-full">
                <Skeleton className="h-8 w-[330px] bg-gray-3" />
                <Skeleton className="h-8 w-[62px] bg-gray-3" />
            </div>
        </div>
    ),
};