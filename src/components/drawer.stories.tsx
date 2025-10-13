import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";

/**
 * A drawer component for React built on top of Vaul.
 * Provides a slide-out panel that can be opened from any edge of the screen.
 *
 * **Note:** The Drawer parts use `asChild` (Vaul/Radix pattern) while Ariakit component
 * parts use `render` prop (Ariakit pattern). This demonstrates how to combine
 * both libraries in a responsive component.
 */
const meta = {
  title: "ui/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default drawer with goal adjustment controls.
 * This matches the shadcn demo with increment/decrement buttons.
 */
export const Default: Story = {
  render: () => {
    const [goal, setGoal] = useState(350);

    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <MinusIcon className="size-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-muted-foreground text-[0.70rem] uppercase">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <PlusIcon className="size-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <div className="flex h-full items-end justify-around gap-1">
                  {[
                    400, 300, 200, 300, 200, 278, 189, 239, 300, 200, 278, 189,
                    349,
                  ].map((value, i) => (
                    <div
                      key={i}
                      className="bg-foreground/90 w-full rounded-t"
                      style={{ height: `${(value / 400) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

/**
 * A responsive dialog that shows a Dialog on desktop and Drawer on mobile.
 * This is a common pattern for creating responsive interfaces.
 */
export const ResponsiveDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const ProfileForm = ({ className }: { className?: string }) => (
      <form className={cn("grid items-start gap-6", className)}>
        <div className="grid gap-3">
          <Label htmlFor="email-responsive">Email</Label>
          <Input
            type="email"
            id="email-responsive"
            defaultValue="shadcn@example.com"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-responsive">Username</Label>
          <Input id="username-responsive" defaultValue="@shadcn" />
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    );

    if (isDesktop) {
      return (
        <Dialog open={open} setOpen={setOpen}>
          <DialogTrigger
            render={(props) => (
              <Button {...props} variant="outline">
                Edit Profile
              </Button>
            )}
          />
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

/**
 * Test: Clicking Cancel button should close the drawer.
 */
export const ShouldOpenCloseWithCancel: Story = {
  name: "when clicking Cancel button, should close the drawer",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [goal, setGoal] = useState(350);

    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <MinusIcon className="size-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-muted-foreground text-[0.70rem] uppercase">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <PlusIcon className="size-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("Open the drawer", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /open drawer/i })
      );

      const dialog = await canvasBody.findByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute("data-state", "open");
    });

    await step("Close the drawer", async () => {
      await userEvent.click(
        await canvasBody.findByRole("button", { name: /cancel/i }),
        { delay: 100 }
      );
      expect(await canvasBody.findByRole("dialog")).toHaveAttribute(
        "data-state",
        "closed"
      );
    });
  },
};
