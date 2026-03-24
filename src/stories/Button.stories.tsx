import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/ui/Button";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "UI/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Comprar",
    },
};

export const WithLongText: Story = {
    args: {
        children: "Adicionar ao carrinho",
    },
};
