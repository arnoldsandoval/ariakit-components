import { Button } from "@/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Copy } from "lucide-react";
import React from "react";
import { expect, fn, userEvent, within } from "storybook/test";
import { Input } from "./input";
import { Label } from "./label";

/**
 * A window overlaid on either the primary window or another dialog window,
 * rendering the content underneath inert.
 */
const meta = {
  title: "ui/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: null,
  },
  render: (args) => (
    <Dialog {...args}>
      <form>
        <DialogTrigger
          render={(props: React.ComponentProps<typeof Button>) => (
            <Button
              {...props}
              variant="outline"
              onClick={(e: React.MouseEvent) => {
                fn()(e);
                props.onClick?.(e);
              }}
            >
              Edit Profile
            </Button>
          )}
        />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose variant="outline">Cancel</DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the dialog.
 */
export const Default: Story = {};

/**
 * A dialog with a custom close button in the content area.
 */
export const CustomCloseButton: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger
        render={(props: React.ComponentProps<typeof Button>) => (
          <Button
            {...props}
            onClick={(e: React.MouseEvent) => {
              fn()(e);
              props.onClick?.(e);
            }}
          >
            Share
          </Button>
        )}
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button size="icon" variant="outline">
            <Copy />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose variant="secondary">Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};


export const ShouldOpenCloseWithCancel: Story = {
  name: "when clicking Cancel button, should close the dialog",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("Open the dialog", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /edit profile/i })
      );
      const dialog = await canvasBody.findByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute("data-open", "true");
    });

    await step("Close the dialog", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /cancel/i })
      );
      const dialog = canvasBody.queryByRole("dialog");
      expect(dialog).not.toBeVisible();
    });
  },
};

export const ShouldOpenCloseCross: Story = {
  name: "when clicking Close icon, should close the dialog",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("Open the dialog", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /edit profile/i })
      );
      const dialog = await canvasBody.findByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute("data-open", "true");
    });

    await step("Close the dialog", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /close/i })
      );
      const dialog = canvasBody.queryByRole("dialog");
      expect(dialog).not.toBeVisible();
    });
  },
};
