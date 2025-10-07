import { AspectRatio } from "@/components/aspect-ratio";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Displays content within a desired ratio.
 */
const meta: Meta<typeof AspectRatio> = {
  title: "ui/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: "number",
      description: "The desired aspect ratio",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A component that displays an image with a 16:9 aspect ratio.
 */
export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover w-full h-full"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 16 / 9,
  },
};

/**
 * Use the `1:1` aspect ratio to display a square image.
 */
export const Square: Story = {
  render: (args) => (
    <AspectRatio {...args} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover w-full h-full"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 1,
  },
};

/**
 * Use the `4:3` aspect ratio to display a landscape image.
 */
export const Landscape: Story = {
  render: (args) => (
    <AspectRatio {...args} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover w-full h-full"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 4 / 3,
  },
};

/**
 * Use the `2.35:1` aspect ratio to display a cinemascope image.
 */
export const Cinemascope: Story = {
  render: (args) => (
    <AspectRatio {...args} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover w-full h-full"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 2.35 / 1,
  },
};
