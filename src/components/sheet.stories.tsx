import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { expect, userEvent, waitFor, within } from "storybook/test";

/**
 * Extends the Dialog component to display content that complements the main
 * content of the screen.
 *
 * The Sheet can slide in from any side: top, right, bottom, or left.
 */
const meta: Meta<typeof SheetContent> = {
  title: "ui/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "radio",
      },
    },
  },
  args: {
    side: "right",
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <SheetClose render={<Button type="submit" />}>
            Save changes
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SheetContent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the sheet from the right side.
 */
export const Default: Story = {};

/**
 * You can adjust the size of the sheet using CSS classes on SheetContent.
 * This example shows a sheet that takes up 2/3 of the screen width.
 */
export const CustomSize: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <SheetContent className="!w-2/3 sm:!w-2/3 !max-w-none">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <SheetClose render={<Button type="submit" />}>
            Save changes
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

/**
 * Use the `side` prop to specify which edge of the screen the sheet slides in from.
 * Available options: top, right, bottom, left.
 */
export const Sides: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-8">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>Top</SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Sheet from Top</SheetTitle>
            <SheetDescription>
              This sheet slides in from the top of the screen.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="flex gap-8">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Left
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Sheet from Left</SheetTitle>
              <SheetDescription>
                This sheet slides in from the left side of the screen.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Right
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Sheet from Right</SheetTitle>
              <SheetDescription>
                This sheet slides in from the right side of the screen.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          Bottom
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Sheet from Bottom</SheetTitle>
            <SheetDescription>
              This sheet slides in from the bottom of the screen.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
};

export const ShouldOpenCloseWithSubmit: Story = {
  name: "when clicking Save changes button, should close the sheet",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("open the sheet", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /open/i })
      );
      const sheet = await canvasBody.findByRole("dialog");
      expect(sheet).toBeInTheDocument();
      expect(sheet).toHaveAttribute("data-open", "true");
    });

    await step("close the sheet", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /save changes/i })
      );
      await waitFor(
        () => {
          const sheet = canvasBody.queryByRole("dialog");
          if (sheet) {
            expect(sheet).not.toBeVisible();
          }
        },
        { timeout: 500 }
      );
    });
  },
};

export const ShouldOpenCloseWithCancel: Story = {
  name: "when clicking Cancel button, should close the sheet",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("open the sheet", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /open/i })
      );
      const sheet = await canvasBody.findByRole("dialog");
      expect(sheet).toBeInTheDocument();
      expect(sheet).toHaveAttribute("data-open", "true");
    });

    await step("close the sheet", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /cancel/i })
      );
      await waitFor(
        () => {
          const sheet = canvasBody.queryByRole("dialog");
          if (sheet) {
            expect(sheet).not.toBeVisible();
          }
        },
        { timeout: 500 }
      );
    });
  },
};

export const ShouldOpenCloseWithClose: Story = {
  name: "when clicking Close icon, should close the sheet",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("open the sheet", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /open/i })
      );
      const sheet = await canvasBody.findByRole("dialog");
      expect(sheet).toBeInTheDocument();
      expect(sheet).toHaveAttribute("data-open", "true");
    });

    await step("close the sheet", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /close/i })
      );
      await waitFor(
        () => {
          const sheet = canvasBody.queryByRole("dialog");
          if (sheet) {
            expect(sheet).not.toBeVisible();
          }
        },
        { timeout: 500 }
      );
    });
  },
};
