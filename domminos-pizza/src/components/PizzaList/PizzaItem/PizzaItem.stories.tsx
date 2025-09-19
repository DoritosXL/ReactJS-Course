import type { Meta, StoryObj } from '@storybook/react-vite';

import { PizzaItem } from './PizzaItem';
import { MemoryRouter } from 'react-router';

const meta = {
  component: PizzaItem,
} satisfies Meta<typeof PizzaItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <PizzaItem {...Default.args} />
      </MemoryRouter>
    )
  },
  args: {
    id: '1',
    name: 'Margherita',
    description: 'Classic delight with 100% real mozzarella cheese',
    price: 8.99,
    pictureUrl:
      'https://images.unsplash.com/photo-1601924582975-c6f2a356b4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2hlcml0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
};