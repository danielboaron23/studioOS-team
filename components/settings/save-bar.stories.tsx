import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { SaveBar } from "./save-bar"

const meta = {
  title: "Settings/SaveBar",
  component: SaveBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSave: () => console.log("Save clicked"),
    onDiscard: () => console.log("Discard clicked"),
  },
} satisfies Meta<typeof SaveBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="h-screen flex flex-col">
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Settings Page</h2>
          <p className="text-muted-foreground mb-4">
            Make some changes to your settings to see the save bar appear.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Display Name"
              className="w-full px-3 py-2 border rounded-md"
            />
            <textarea
              placeholder="Bio"
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
}

export const WithLongContent: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Settings Page</h2>
          <p className="text-muted-foreground mb-4">
            Scroll down to see the sticky save bar behavior.
          </p>
          <div className="space-y-4 pb-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Setting {i + 1}</h3>
                <input
                  type="text"
                  placeholder={`Value ${i + 1}`}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
}
