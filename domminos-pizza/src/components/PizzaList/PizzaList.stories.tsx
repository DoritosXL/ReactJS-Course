import type { Meta, StoryObj } from '@storybook/react-vite';

import { PizzaList } from './PizzaList';

const meta = {
  component: PizzaList,
} satisfies Meta<typeof PizzaList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};