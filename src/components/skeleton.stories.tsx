import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "@/components/skeleton";

/**
 * Use to show a placeholder while content is loading.
 *
 * The Skeleton component is a simple styled div with a pulsing animation
 * to indicate loading states.
 */
const meta = {
  title: "ui/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

/**
 * The default form of the skeleton showing a profile loading state.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton {...args} className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton {...args} className="h-4 w-[250px]" />
        <Skeleton {...args} className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

/**
 * A simple skeleton line for text content.
 */
export const Line: Story = {
  render: (args) => <Skeleton {...args} className="h-4 w-[250px]" />,
};

/**
 * A circular skeleton for avatars or icons.
 */
export const Circle: Story = {
  render: (args) => <Skeleton {...args} className="h-12 w-12 rounded-full" />,
};

/**
 * A rectangular skeleton for images or cards.
 */
export const Rectangle: Story = {
  render: (args) => <Skeleton {...args} className="h-[125px] w-[250px] rounded-xl" />,
};

/**
 * A card skeleton showing a typical card loading state with image and text.
 */
export const Card: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-3 w-[350px]">
      <Skeleton {...args} className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton {...args} className="h-4 w-full" />
        <Skeleton {...args} className="h-4 w-4/5" />
      </div>
    </div>
  ),
};

/**
 * Multiple skeleton cards in a grid layout.
 */
export const Grid: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col space-y-3 w-[200px]">
          <Skeleton {...args} className="h-[100px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton {...args} className="h-3 w-full" />
            <Skeleton {...args} className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * A list of skeleton items showing a typical list loading state.
 */
export const List: Story = {
  render: (args) => (
    <div className="space-y-4 w-[350px]">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton {...args} className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton {...args} className="h-4 w-full" />
            <Skeleton {...args} className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  ),
};
