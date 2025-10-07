import { Badge } from "@/components/badge";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta = {
  title: "ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
    render: {
      control: false,
      description: "Custom render function for polymorphic component behavior",
    },
    children: {
      control: "text",
      description: "Badge content",
    },
  },
  args: {
    variant: "default",
    children: "Badge",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the badge.
 */
export const Default: Story = {};

/**
 * Use the `secondary` badge to call for less urgent information, blending
 * into the interface while still signaling minor updates or statuses.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/**
 * Use the `destructive` badge to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

/**
 * Use the `outline` badge for overlaying without obscuring interface details,
 * emphasizing clarity and subtlety.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

/**
 * Badge rendered as a link using the render prop pattern.
 */
export const AsLink: Story = {
  render: (args) => (
    <Badge {...args} render={(props) => <a href="#" {...props} />}>
      {args.children}
    </Badge>
  ),
  args: {
    children: "Link Badge",
    variant: "outline",
  },
};

/**
 * Badge rendered as a button using the render prop pattern.
 */
export const AsButton: Story = {
  render: (args) => (
    <Badge {...args} render={(props) => <button type="button" {...props} />}>
      {args.children}
    </Badge>
  ),
  args: {
    children: "Button Badge",
    variant: "secondary",
  },
};
