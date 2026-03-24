import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartIcon } from "../components/ui/CartIcon";

const meta: Meta<typeof CartIcon> = {
    component: CartIcon,
    title: "UI/CartButton",
};

export default meta;

type Story = StoryObj<typeof CartIcon>;

export const Empty: Story = {};

export const Full: Story = {
    args: {
        count: 1
    }
};
