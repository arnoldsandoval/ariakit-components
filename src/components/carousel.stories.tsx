import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { expect, fn, userEvent } from "storybook/test";

import { Card, CardContent } from "@/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  type CarouselApi,
} from "@/components/carousel";

/**
 * A carousel with motion and swipe built using Embla.
 */
const meta: Meta<typeof Carousel> = {
  title: "ui/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    className: "w-full max-w-xs",
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default carousel with 5 items.
 */
export const Default: Story = {};

/**
 * Use the `basis` utility class to set the size of the items.
 */
export const Sizes: Story = {
  render: (args) => (
    <Carousel className="w-full max-w-sm" {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * Responsive sizes: 50% on small screens and 33% on larger screens.
 */
export const ResponsiveSizes: Story = {
  render: (args) => (
    <Carousel className="w-full max-w-sm" {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * Use `pl-[VALUE]` utility on CarouselItem and negative `-ml-[VALUE]` on CarouselContent for spacing.
 */
export const Spacing: Story = {
  render: (args) => (
    <Carousel className="w-full max-w-sm" {...args}>
      <CarouselContent className="-ml-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-4 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * Use the `orientation` prop to set the carousel to vertical.
 */
export const Orientation: Story = {
  render: (args) => (
    <Carousel orientation="vertical" className="w-full max-w-xs" {...args}>
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * Pass options to the carousel using the `opts` prop.
 */
export const WithOptions: Story = {
  render: (args) => (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm"
      {...args}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * Use state and the `setApi` prop to get an instance of the carousel API.
 */
export const WithAPI: Story = {
  args: {
    onSlideChange: fn(),
  },
  render: function CarouselWithAPI(args) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      const onSelect = () => {
        const newSlide = api.selectedScrollSnap() + 1;
        setCurrent(newSlide);
        // Properly call the action from args
        args.onSlideChange?.(`Slide changed to ${newSlide}`, { slide: newSlide, total: count });
      };

      api.on("select", onSelect);

      return () => {
        api.off("select", onSelect);
      };
    }, [api, args.onSlideChange, count]);

    return (
      <div className="w-full max-w-xs">
        <Carousel setApi={setApi} {...args}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    );
  },
};

export const ShouldNavigate: Story = {
  name: "when clicking next/previous buttons, should navigate through slides",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvas, step }) => {
    const slides = await canvas.findAllByRole("group");
    expect(slides).toHaveLength(5);
    const nextBtn = await canvas.findByRole("button", { name: /next/i });
    const prevBtn = await canvas.findByRole("button", {
      name: /previous/i,
    });

    await step("navigate to the last slide", async () => {
      for (let i = 0; i < slides.length - 1; i++) {
        await userEvent.click(nextBtn);
      }
    });

    await step("navigate back to the first slide", async () => {
      for (let i = slides.length - 1; i > 0; i--) {
        await userEvent.click(prevBtn);
      }
    });
  },
};

/**
 * Test keyboard navigation - verifies arrow keys navigate the carousel.
 */
export const KeyboardNavigation: Story = {
  name: "keyboard navigation test",
  tags: ["!dev", "!autodocs"],
  render: function KeyboardNavCarousel(args) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;

      setCurrent(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div>
        <Carousel setApi={setApi} {...args} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center" data-testid="current-slide">
          Slide {current}
        </div>
      </div>
    );
  },
  play: async ({ canvas, step }) => {
    // Wait for carousel to be ready
    const carousel = await canvas.findByRole("region");
    const slideIndicator = await canvas.findByTestId("current-slide");

    // Verify initial state
    await step("Initial state should be slide 0", async () => {
      expect(slideIndicator).toHaveTextContent("Slide 0");
    });

    // Test ArrowRight navigation
    await step("ArrowRight should navigate forward", async () => {
      const rightEvent = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      });
      carousel.dispatchEvent(rightEvent);

      // Wait for animation/state update
      await new Promise((resolve) => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 1");

      // Navigate again
      carousel.dispatchEvent(rightEvent);
      await new Promise((resolve) => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 2");
    });

    // Test ArrowLeft navigation
    await step("ArrowLeft should navigate backward", async () => {
      const leftEvent = new KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      });
      carousel.dispatchEvent(leftEvent);

      // Wait for animation/state update
      await new Promise((resolve) => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 1");

      // Navigate back to start
      carousel.dispatchEvent(leftEvent);
      await new Promise((resolve) => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 0");
    });

    // Test that other keys don't navigate
    await step("Other keys should not navigate", async () => {
      const upEvent = new KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      });
      carousel.dispatchEvent(upEvent);

      await new Promise((resolve) => setTimeout(resolve, 300));
      // Should still be at slide 0
      expect(slideIndicator).toHaveTextContent("Slide 0");
    });

    // Test preventDefault behavior
    await step("Arrow keys should preventDefault", async () => {
      let defaultPrevented = false;
      const preventableEvent = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      });

      // Add listener to check if default was prevented
      carousel.addEventListener(
        "keydown",
        (e) => {
          if (e.defaultPrevented) defaultPrevented = true;
        },
        { once: true }
      );

      carousel.dispatchEvent(preventableEvent);

      // The carousel should have called preventDefault on arrow keys
      expect(preventableEvent.defaultPrevented || defaultPrevented).toBe(true);
    });
  },
};

// Component to test context error
function InvalidCarouselUsage() {
  try {
    // This will throw an error since it's not inside a Carousel
    useCarousel();
  } catch (error) {
    return <div>Error: {(error as Error).message}</div>;
  }
  return null;
}

/**
 * Test that useCarousel throws an error when used outside Carousel context.
 */
export const ContextError: Story = {
  tags: ["!dev", "!autodocs"],
  render: () => <InvalidCarouselUsage />,
  parameters: {
    a11y: {
      disable: true,
    },
  },
  play: async ({ canvas }) => {
    const error = await canvas.findByText(
      /useCarousel must be used within a <Carousel \/>/
    );
    expect(error).toBeInTheDocument();
  },
};
