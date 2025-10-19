import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/context-menu";
import { expect, userEvent, within } from "storybook/test";

/**
 * Displays a menu to the user — such as a set of actions or functions —
 * triggered by right-clicking.
 */
const meta = {
  title: "ui/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {
    setValues: { action: "setValues" },
  },
  args: {},
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A context menu with sub menu items.
 * This is the default demo from shadcn/ui showing common context menu patterns.
 */
export const Default: Story = {
  args: {
    children: <></>,
  },
  render: (args) => {
    const [values, setValues] = React.useState({
      settings: ["show-bookmarks"],
      person: "pedro",
    });

    return (
      <ContextMenu
        {...args}
        values={values}
        setValues={(newValues) => {
          setValues(newValues);
          args.setValues?.(newValues);
        }}
      >
        <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem name="settings" value="show-bookmarks">
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem name="settings" value="show-full-urls">
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup>
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem name="person" value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem name="person" value="colm">
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

/**
 * A simple context menu with basic menu items.
 */
export const Simple: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-32">
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * A context menu with keyboard shortcuts.
 */
export const WithShortcuts: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Print
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * A context menu with a submenu.
 */
export const WithSubmenu: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          New Tab
          <ContextMenuShortcut>⌘T</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window
          <ContextMenuShortcut>⌘N</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Print...
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * A context menu with checkbox items.
 */
export const WithCheckboxes: Story = {
  args: {
    children: <></>,
  },
  render: (args) => {
    const [values, setValues] = React.useState({
      settings: ["show-bookmarks"],
    });

    return (
      <ContextMenu
        {...args}
        values={values}
        setValues={(newValues) => {
          setValues(newValues);
          args.setValues?.(newValues);
        }}
      >
        <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuCheckboxItem name="settings" value="show-bookmarks">
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem name="settings" value="show-full-urls">
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Settings
            <ContextMenuShortcut>⌘,</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

/**
 * A context menu with a radio group.
 */
export const WithRadioGroup: Story = {
  args: {
    children: <></>,
  },
  render: (args) => {
    const [values, setValues] = React.useState({ person: "pedro" });

    return (
      <ContextMenu
        {...args}
        values={values}
        setValues={(newValues) => {
          setValues(newValues);
          args.setValues?.(newValues);
        }}
      >
        <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuRadioGroup>
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem name="person" value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem name="person" value="colm">
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

/**
 * A context menu with inset menu items for better visual alignment.
 */
export const WithInset: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem name="show-developer-tools" inset checked>
          Show Developer Tools
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * A context menu with a destructive variant item.
 */
export const WithDestructive: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Archive</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * Test: Right-clicking the trigger area opens the menu.
 */
export const ShouldOpenOnRightClick: Story = {
  name: "when right-clicking the trigger area, the menu appears and can be interacted with",
  tags: ["!dev", "!autodocs"],
  args: {
    children: <></>,
  },
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="bg-accent flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-32">
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  play: async ({ canvasElement, canvas, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step("Right-click on the trigger area", async () => {
      await userEvent.pointer({
        keys: "[MouseRight>]",
        target: await canvas.findByText(/right click here/i),
      });
    });

    await step("Menu should appear with items", async () => {
      expect(await canvasBody.findByRole("menu")).toBeInTheDocument();
      const items = await canvasBody.findAllByRole("menuitem");
      expect(items).toHaveLength(4);
    });

    await step("Click the first menu item", async () => {
      const items = await canvasBody.findAllByRole("menuitem");
      await userEvent.click(items[0]);
    });
  },
};
