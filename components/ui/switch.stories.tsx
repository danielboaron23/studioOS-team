import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Label } from './label';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'On/off control (Radix). Used in Settings for notification channels, quiet hours and reduced motion. Space toggles it.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { 'aria-label': 'Toggle' } };

export const Checked: Story = { args: { defaultChecked: true, 'aria-label': 'Toggle' } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="email" defaultChecked />
      <Label htmlFor="email">Email</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Switch disabled aria-label="Off, disabled" />
      <Switch disabled defaultChecked aria-label="On, disabled" />
    </div>
  ),
};
