import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Terminal,
} from "lucide-react";

/**
 * Displays a callout for user attention.
 */
const meta = {
  title: "ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "destructive"],
      control: { type: "radio" },
      description: "The visual style of the alert",
    },
  },
  args: {
    variant: "default",
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default alert with an icon, title and description.
 */
export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Use the `destructive` variant to indicate an error or destructive action.
 */
export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Alert without an icon.
 */
export const NoIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Alert with only a description and no title.
 */
export const DescriptionOnly: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertDescription>
        This is an informational message with only a description.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Alert with a warning style using default variant.
 */
export const Warning: Story = {
  render: () => (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action cannot be undone. Please proceed with caution.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Alert with a success message using default variant.
 */
export const Success: Story = {
  render: () => (
    <Alert>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Alert with longer content demonstrating text wrapping.
 */
export const LongContent: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Important Information</AlertTitle>
      <AlertDescription>
        This is a longer alert message that demonstrates how the component
        handles multiple lines of text. The alert will expand vertically to
        accommodate the content while maintaining proper spacing and alignment
        between the icon, title, and description areas.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Multiple alerts stacked to show spacing.
 */
export const Stacked: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
