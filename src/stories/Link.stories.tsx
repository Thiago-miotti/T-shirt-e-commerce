import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../components/ui/Link";

const meta: Meta<typeof Link> = {
    component: Link,
    title: "UI/Link",
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        children: "Link",
    },
};

export const WithLongText: Story = {
    args: {
        children: "Adicionar ao carrinho",
    },
};
