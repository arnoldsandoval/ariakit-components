import { Separator } from "@/components/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Visually or semantically separates content.
 *
 * Ariakit's Separator component supports the `render` prop, allowing you to
 * render the separator as any HTML element or custom component while preserving
 * all accessibility features and styling.
 */
const meta = {
  title: "ui/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default horizontal separator between vertical items.
 */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center gap-2">
      <div>Top</div>
      <Separator orientation="horizontal" />
      <div>Bottom</div>
    </div>
  ),
};

/**
 * Use `orientation="vertical"` for a vertical separator between horizontal items.
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center justify-center gap-2">
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </div>
  ),
};

/**
 * Use the `render` prop to render the separator as a different element.
 * This example renders the separator as an `<hr>` element.
 */
export const AsHr: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center gap-2">
      <div>Content Above</div>
      <Separator render={<hr />} orientation="horizontal" />
      <div>Content Below</div>
    </div>
  ),
};

/**
 * You can use the render prop with custom components.
 * This demonstrates using a styled div with additional attributes.
 */
export const UsingRenderProp: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="text-sm font-medium">Section 1</div>
      <Separator
        render={(props) => <div {...props} data-custom-attr="divider" />}
        orientation="horizontal"
      />
      <div className="text-sm font-medium">Section 2</div>
      <Separator
        render={(props) => <div {...props} data-custom-attr="divider" />}
        orientation="horizontal"
      />
      <div className="text-sm font-medium">Section 3</div>
    </div>
  ),
};

/**
 * Multiple separators with different orientations in a complex layout.
 */
export const ComplexLayout: Story = {
  render: () => (
    <div className="p-4 border rounded-lg">
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Left Column</h3>
          <p className="text-sm text-muted-foreground">Some content here</p>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Right Column</h3>
          <p className="text-sm text-muted-foreground">More content here</p>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4" />
      <div className="text-sm text-muted-foreground">Footer content</div>
    </div>
  ),
};
