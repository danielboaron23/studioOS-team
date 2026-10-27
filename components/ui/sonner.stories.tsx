import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { toast } from 'sonner';

import { Button } from './button';
import { Toaster } from './sonner';

const meta: Meta<typeof Toaster> = {
  title: 'Primitives/Sonner',
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component:
          'Toast notification system (sonner). Displays temporary messages for user actions. Used for save confirmations, errors, and status updates.',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => <Button onClick={() => toast('Changes saved')}>Show toast</Button>,
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success('Changes saved successfully')}>Show success</Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button onClick={() => toast.error("Couldn't save. Try again.")} variant="destructive">
      Show error
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Event scheduled', {
          action: {
            label: 'Undo',
            onClick: () => toast('Undone'),
          },
        })
      }
    >
      Show with action
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast('Changes saved')}>Default</Button>
      <Button onClick={() => toast.success('Success message')}>Success</Button>
      <Button onClick={() => toast.error('Error occurred')} variant="destructive">
        Error
      </Button>
      <Button onClick={() => toast.warning('Warning message')} variant="secondary">
        Warning
      </Button>
      <Button onClick={() => toast.info('Info message')} variant="secondary">
        Info
      </Button>
    </div>
  ),
};
