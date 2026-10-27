import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Field } from "./field"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Settings/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Username",
    description: "This is your public display name.",
    htmlFor: "username",
    children: <Input id="username" placeholder="Enter username" />,
  },
}

export const WithError: Story = {
  args: {
    label: "Email",
    error: "Please enter a valid email address.",
    htmlFor: "email",
    children: <Input id="email" type="email" placeholder="email@example.com" />,
  },
}

export const Required: Story = {
  args: {
    label: "Full Name",
    description: "Your full name as it appears on official documents.",
    htmlFor: "fullname",
    required: true,
    children: <Input id="fullname" placeholder="John Doe" />,
  },
}

export const NoLabel: Story = {
  args: {
    description: "Optional description without a label.",
    children: <Input placeholder="Input without label" />,
  },
}

export const NoDescription: Story = {
  args: {
    label: "Bio",
    htmlFor: "bio",
    children: <Input id="bio" placeholder="Tell us about yourself" />,
  },
}
