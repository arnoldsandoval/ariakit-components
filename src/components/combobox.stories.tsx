import { Button } from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { cn } from "@/lib/utils";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

/**
 * A combobox component built by composing Popover and Command components.
 * Provides autocomplete input with a searchable list of suggestions.

 */
const meta = {
  title: "ui/Combobox",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex h-96 items-start justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "vue",
    label: "Vue",
  },
];

/**
 * The default combobox with framework selection.
 * This demonstrates the basic composition pattern.
 */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={(props) => (
            <Button
              {...props}
              variant="outline"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        />
        <PopoverContent
          className="w-[200px] p-0"
          aria-label="Framework selection"
        >
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};

/**
 * Combobox within a popover, matching shadcn's popover example.
 * Shows a status selector in a compact form layout.
 */
export const PopoverExample: Story = {
  render: () => {
    type Status = {
      value: string;
      label: string;
    };

    const statuses: Status[] = [
      { value: "backlog", label: "Backlog" },
      { value: "todo", label: "Todo" },
      { value: "in progress", label: "In Progress" },
      { value: "done", label: "Done" },
      { value: "canceled", label: "Canceled" },
    ];

    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

    return (
      <div className="flex items-center space-x-4">
        <p className="text-muted-foreground text-sm">Status</p>
        <Popover open={open} onOpenChange={setOpen} placement="right-start">
          <PopoverTrigger
            render={(props) => (
              <Button
                {...props}
                variant="outline"
                className="w-[150px] justify-start"
              >
                {selectedStatus ? (
                  <>{selectedStatus.label}</>
                ) : (
                  <>+ Set status</>
                )}
              </Button>
            )}
          />
          <PopoverContent
            className="p-0"
            placement="right-start"
            aria-label="Status selection"
          >
            <Command>
              <CommandInput placeholder="Change status..." className="h-9" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find(
                            (priority) => priority.value === value
                          ) || null
                        );
                        setOpen(false);
                      }}
                    >
                      {status.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

/**
 * A wider combobox variant showing more space for longer options.
 */
export const Wide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={(props) => (
            <Button
              {...props}
              variant="outline"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        />
        <PopoverContent
          className="w-[300px] p-0"
          aria-label="Framework selection"
        >
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};

/**
 * Combobox with multiple groups for categorized options.
 */
export const WithGroups: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const metaFrameworks = [
      { value: "next.js", label: "Next.js" },
      { value: "remix", label: "Remix" },
      { value: "astro", label: "Astro" },
      { value: "nuxt.js", label: "Nuxt.js" },
      { value: "sveltekit", label: "SvelteKit" },
    ];

    const baseFrameworks = [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "svelte", label: "Svelte" },
    ];

    const allFrameworks = [...metaFrameworks, ...baseFrameworks];

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={(props) => (
            <Button
              {...props}
              variant="outline"
              aria-expanded={open}
              className="w-[250px] justify-between"
            >
              {value
                ? allFrameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        />
        <PopoverContent
          className="w-[250px] p-0"
          aria-label="Framework selection"
        >
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup heading="Meta Frameworks">
                {metaFrameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Base Frameworks">
                {baseFrameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};

/**
 * Combobox that opens by default for demonstration purposes.
 */
export const DefaultOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState("");

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={(props) => (
            <Button
              {...props}
              variant="outline"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        />
        <PopoverContent
          className="w-[200px] p-0"
          aria-label="Framework selection"
        >
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};

/**
 * Combobox with a preselected value.
 */
export const WithDefaultValue: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("next.js");

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={(props) => (
            <Button
              {...props}
              variant="outline"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        />
        <PopoverContent
          className="w-[200px] p-0"
          aria-label="Framework selection"
        >
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};
