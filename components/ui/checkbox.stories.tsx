import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Multi-select control (Radix). Space toggles it. Used in Settings for quiet-hours days.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { 'aria-label': 'Check' } };

export const Checked: Story = { args: { defaultChecked: true, 'aria-label': 'Check' } };

export const Days: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
        <div key={d} className="flex items-center gap-2">
          <Checkbox id={`day-${d}`} defaultChecked={i < 5} />
          <Label htmlFor={`day-${d}`}>{d}</Label>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Checkbox disabled aria-label="Disabled" />
      <Checkbox disabled defaultChecked aria-label="Disabled checked" />
      <Checkbox aria-invalid="true" aria-label="Invalid" />
    </div>
  ),
};
