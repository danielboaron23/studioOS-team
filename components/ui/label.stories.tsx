import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Primitives/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'Accessible label (Radix). Pair with a control through htmlFor/id.',
      },
    },
  },
  args: { children: 'Display name' },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="name">Display name</Label>
      <Input id="name" defaultValue="Daniel Boaron" />
    </div>
  ),
};
