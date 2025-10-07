import { Badge } from "@/components/badge";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

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
    <Badge render={(props) => <a href="#" {...props} />} {...args} />
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
    <Badge render={(props) => <button type="button" {...props} />} {...args} />
  ),
  args: {
    children: "Button Badge",
    variant: "secondary",
  },
};

/**
 * Test to verify render prop functionality works correctly.
 */
export const RenderPropTest: Story = {
  name: "Render prop should create correct elements",
  tags: ["!dev", "!autodocs"],
  render: () => (
    <div className="flex gap-4">
      <Badge data-testid="default-badge">Default</Badge>
      <Badge
        data-testid="link-badge"
        render={(props) => <a href="#" {...props} />}
      >
        Link
      </Badge>
      <Badge
        data-testid="button-badge"
        render={(props) => <button type="button" {...props} />}
      >
        Button
      </Badge>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("should render default badge as span", async () => {
      const badge = canvas.getByTestId("default-badge");
      expect(badge.tagName.toLowerCase()).toBe("span");
      expect(badge).toHaveTextContent("Default");
    });

    await step("should render link badge as anchor", async () => {
      const badge = canvas.getByTestId("link-badge");
      expect(badge.tagName.toLowerCase()).toBe("a");
      expect(badge).toHaveTextContent("Link");
      expect(badge).toHaveAttribute("href", "#");
    });

    await step("should render button badge as button", async () => {
      const badge = canvas.getByTestId("button-badge");
      expect(badge.tagName.toLowerCase()).toBe("button");
      expect(badge).toHaveTextContent("Button");
      expect(badge).toHaveAttribute("type", "button");
    });

    await step("should apply badge styles to all variants", async () => {
      const defaultBadge = canvas.getByTestId("default-badge");
      const linkBadge = canvas.getByTestId("link-badge");
      const buttonBadge = canvas.getByTestId("button-badge");

      // All should have the data-slot attribute
      expect(defaultBadge).toHaveAttribute("data-slot", "badge");
      expect(linkBadge).toHaveAttribute("data-slot", "badge");
      expect(buttonBadge).toHaveAttribute("data-slot", "badge");

      // All should have badge styling classes
      const badgeClasses = [
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-md",
      ];
      
      badgeClasses.forEach((className) => {
        expect(defaultBadge).toHaveClass(className);
        expect(linkBadge).toHaveClass(className);
        expect(buttonBadge).toHaveClass(className);
      });
    });
  },
};
