import { Button } from "@/components/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/command";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";

/**
 * A command menu component built with Ariakit Combobox and Dialog.
 * Provides fast, composable command palette functionality with built-in filtering.
 */
const meta = {
  title: "ui/Command",
  component: Command,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    className: "rounded-lg w-96 border shadow-md",
  },
  render: (args) => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <CalendarIcon />
            Calendar
          </CommandItem>
          <CommandItem value="search-emoji">
            <SmileIcon />
            Search Emoji
          </CommandItem>
          <CommandItem value="calculator" disabled>
            <CalculatorIcon />
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile">
            <UserIcon />
            Profile
          </CommandItem>
          <CommandItem value="billing">
            <CreditCardIcon />
            Billing
          </CommandItem>
          <CommandItem value="settings">
            <SettingsIcon />
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the command menu with grouped items.
 */
export const Default: Story = {};

/**
 * Command menu with keyboard shortcuts displayed.
 */
export const WithShortcuts: Story = {
  render: (args) => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <CalendarIcon />
            Calendar
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem value="search-emoji">
            <SmileIcon />
            Search Emoji
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem value="calculator">
            <CalculatorIcon />
            Calculator
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

/**
 * Command menu as a dialog overlay, triggered by a button.
 * This is the most common pattern for command palettes.
 */
export const AsDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          <SearchIcon />
          Open Command Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem value="calendar" onSelect={() => setOpen(false)}>
                  <CalendarIcon />
                  Calendar
                </CommandItem>
                <CommandItem
                  value="search-emoji"
                  onSelect={() => setOpen(false)}
                >
                  <SmileIcon />
                  Search Emoji
                </CommandItem>
                <CommandItem value="calculator" onSelect={() => setOpen(false)}>
                  <CalculatorIcon />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem value="profile" onSelect={() => setOpen(false)}>
                  <UserIcon />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem value="billing" onSelect={() => setOpen(false)}>
                  <CreditCardIcon />
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem value="settings" onSelect={() => setOpen(false)}>
                  <SettingsIcon />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  },
};

/**
 * Test: Typing in the combobox should filter results based on the search query.
 */
export const TypingInCombobox: Story = {
  name: "when typing into the combobox, should filter results",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox");

    // Search for "calendar" which should return a single result
    await userEvent.type(input, "calen", { delay: 100 });
    expect(canvas.getAllByRole("option", { name: /calendar/i })).toHaveLength(
      1
    );

    await userEvent.clear(input);

    // Search for "se" which should return multiple results
    await userEvent.type(input, "se", { delay: 100 });
    expect(canvas.getAllByRole("option").length).toBeGreaterThan(1);
    expect(canvas.getAllByRole("option", { name: /search/i })).toHaveLength(1);
    expect(canvas.getAllByRole("option", { name: /settings/i })).toHaveLength(
      1
    );

    await userEvent.clear(input);

    // Search for "story" which should return no results
    await userEvent.type(input, "story", { delay: 100 });
    expect(canvas.queryAllByRole("option")).toHaveLength(0);
    expect(canvas.getByText(/no results/i)).toBeVisible();
  },
};

/**
 * Test: Groups should be hidden when they have no matching items.
 */
export const FilteringHidesEmptyGroups: Story = {
  name: "when filtering, should hide empty groups",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox");

    // Initially both groups should be visible (check for items from each group)
    expect(canvas.getByRole("option", { name: /calendar/i })).toBeVisible();
    expect(canvas.getByRole("option", { name: /profile/i })).toBeVisible();

    // Search for "calendar" - only "Suggestions" group items should show
    await userEvent.type(input, "calendar", { delay: 100 });
    expect(canvas.getByRole("option", { name: /calendar/i })).toBeVisible();
    expect(
      canvas.queryByRole("option", { name: /profile/i })
    ).not.toBeInTheDocument();

    await userEvent.clear(input);

    // Search for "profile" - only "Settings" group items should show
    await userEvent.type(input, "profile", { delay: 100 });
    expect(
      canvas.queryByRole("option", { name: /calendar/i })
    ).not.toBeInTheDocument();
    expect(canvas.getByRole("option", { name: /profile/i })).toBeVisible();
  },
};
