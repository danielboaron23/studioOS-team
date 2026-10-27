import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Label } from './label';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Primitives/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line input that grows with its content. Supports invalid state via `aria-invalid`. Used for the Profile bio.',
      },
    },
  },
  args: { placeholder: 'A few words about you' },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
};

export const WithCounter: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" maxLength={280} defaultValue="Product designer. Building studioOS." />
      <p className="text-right text-xs text-muted-foreground">36/280</p>
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="w-80">
      <Textarea aria-invalid="true" defaultValue="Too long…" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <Textarea disabled placeholder="Disabled" />
    </div>
  ),
};
