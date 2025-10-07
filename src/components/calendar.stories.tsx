import { Calendar } from "@/components/calendar";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { addDays } from "date-fns";
import * as React from "react";
import { expect, fn, userEvent } from "storybook/test";

/**
 * A date field component that allows users to enter and edit date.
 */
const meta = {
  title: "ui/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
    numberOfMonths: {
      control: "number",
      description: "Number of months to display",
    },
    showOutsideDays: {
      control: "boolean",
      description: "Show days that fall outside the current month",
    },
  },
  args: {
    mode: "single",
    selected: new Date(),
    onSelect: fn(),
    className: "rounded-md border w-fit",
    disabled: false,
    numberOfMonths: 1,
    showOutsideDays: true,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the calendar.
 */
export const Default: Story = {};

/**
 * Use the `multiple` mode to select multiple dates.
 */
export const Multiple: Story = {
  args: {
    min: 1,
    selected: [new Date(), addDays(new Date(), 2), addDays(new Date(), 8)],
    mode: "multiple",
  },
};

/**
 * Use the `range` mode to select a range of dates.
 */
export const Range: Story = {
  args: {
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
    mode: "range",
  },
};

/**
 * Use the `disabled` prop to disable specific dates.
 */
export const Disabled: Story = {
  args: {
    disabled: [
      addDays(new Date(), 1),
      addDays(new Date(), 2),
      addDays(new Date(), 3),
      addDays(new Date(), 5),
    ],
  },
};

/**
 * Use the `numberOfMonths` prop to display multiple months.
 */
export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
    showOutsideDays: false,
  },
};

/**
 * Use dropdown navigation to select months and years.
 */
export const WithDropdownNavigation: Story = {
  args: {
    captionLayout: "dropdown",
    defaultMonth: new Date(2023, 5),
    fromYear: 2020,
    toYear: 2030,
  },
};

/**
 * Display week numbers alongside the calendar.
 */
export const WithWeekNumbers: Story = {
  args: {
    showWeekNumber: true,
    defaultMonth: new Date(2023, 5),
  },
};

/**
 * A date of birth picker that only allows selection of past dates.
 */
export const DateOfBirth: Story = {
  args: {
    mode: "single",
    defaultMonth: new Date(1990, 0),
    fromYear: 1900,
    toYear: new Date().getFullYear(),
    captionLayout: "dropdown",
    disabled: { after: new Date() },
  },
};

/**
 * Basic usage example showing controlled state like you'd use in a form.
 */
export const FormExample: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <div className="text-sm font-medium">
          Selected date: {date?.toLocaleDateString() || "None"}
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
          {...args}
        />
      </div>
    );
  },
};

export const ShouldNavigateMonthsWhenClicked: Story = {
  name: "when using the calendar navigation, should change months",
  tags: ["!dev", "!autodocs"],
  args: {
    defaultMonth: new Date(2000, 8),
  },
  play: async ({ canvas }) => {
    const title = await canvas.findByText(/2000/i);
    const startTitle = title.textContent || "";
    const backBtn = await canvas.findByRole("button", {
      name: /previous/i,
    });
    const nextBtn = await canvas.findByRole("button", {
      name: /next/i,
    });
    const steps = 6;
    for (let i = 0; i < steps / 2; i++) {
      await userEvent.click(backBtn);
      expect(title).not.toHaveTextContent(startTitle);
    }
    for (let i = 0; i < steps; i++) {
      await userEvent.click(nextBtn);
      if (i == steps / 2 - 1) {
        expect(title).toHaveTextContent(startTitle);
        continue;
      }
      expect(title).not.toHaveTextContent(startTitle);
    }
  },
};
