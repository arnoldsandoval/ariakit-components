import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import { Toaster } from "@/components/sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentType } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { expect, fn, userEvent } from "storybook/test";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * Building forms with React Hook Form and Zod.
 */
const meta = {
  title: "ui/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  render: () => <ProfileForm onSubmit={fn()} />,
} as Meta<ComponentType>;

export default meta;

type Story = StoryObj<typeof meta>;

const ProfileForm = ({
  onSubmit: onSubmitAction,
}: {
  onSubmit?: (values: FormValues) => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: FormValues) {
    onSubmitAction?.(values);
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-96">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-auto block">
            Submit
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
};

/**
 * The default form of the form.
 */
export const Default: Story = {};

export const ShouldSucceedWhenValidInput: Story = {
  name: "when typing a valid username, should not show an error message",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvas, step }) => {
    await step("Type a valid username", async () => {
      await userEvent.type(
        await canvas.findByRole("textbox", { name: /username/i }),
        "mockuser"
      );
    });

    await step("Click the submit button", async () => {
      await userEvent.click(
        await canvas.findByRole("button", { name: /submit/i })
      );
      expect(
        await canvas.queryByText(/username must be at least 6 characters/i, {
          exact: true,
        })
      ).toBeNull();
    });
  },
};

export const ShouldShowErrorWhenInvalidInput: Story = {
  name: "when typing a short username, should show an error message",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvas, step }) => {
    await step("Type a short username", async () => {
      await userEvent.type(
        await canvas.findByRole("textbox", { name: /username/i }),
        "fail"
      );
    });

    await step("Click the submit button", async () => {
      await userEvent.click(
        await canvas.findByRole("button", { name: /submit/i })
      );
      expect(
        await canvas.queryByText(/username must be at least 6 characters/i, {
          exact: true,
        })
      ).toBeVisible();
    });
  },
};
