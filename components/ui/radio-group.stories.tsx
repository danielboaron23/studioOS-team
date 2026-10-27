import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Primitives/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Single choice from a short list (Radix). Arrow keys move between options. Used in Settings for Theme and Density.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = ['System', 'Light', 'Dark'];

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="System" aria-label="Theme">
      {options.map((o) => (
        <div key={o} className="flex items-center gap-2">
          <RadioGroupItem value={o} id={`theme-${o}`} />
          <Label htmlFor={`theme-${o}`}>{o}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" aria-label="Density" className="flex gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="d-comfortable" />
        <Label htmlFor="d-comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="d-compact" />
        <Label htmlFor="d-compact">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="a" disabled aria-label="Disabled group">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="dis-a" />
        <Label htmlFor="dis-a">Selected</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="dis-b" />
        <Label htmlFor="dis-b">Not selected</Label>
      </div>
    </RadioGroup>
  ),
};
