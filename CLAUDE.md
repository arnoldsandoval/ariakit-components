# Migration Checklist: Radix → Ariakit

This document provides concrete steps for converting Radix-based shadcn components to Ariakit while preserving all styling and functionality.

## Migration Checklist

### 1. **Dependency Updates**

- [ ] **Add** `@ariakit/react` to dependencies (if not already present)
- [ ] **Remove** specific Radix packages after migration (e.g., `@radix-ui/react-slot`)
- [ ] Keep other Radix packages until their components are migrated

### 2. **Component File Updates** (`src/components/[component].tsx`)

- [ ] **Replace imports**: Change from `@radix-ui/react-*` to `@ariakit/react`
- [ ] **Update TypeScript types**:
  - From: `React.ComponentProps<"element"> & { asChild?: boolean }`
  - To: `React.ComponentProps<typeof AriakitComponent>`
- [ ] **Remove `asChild` logic**: Delete conditional component rendering
- [ ] **Replace component**: Use Ariakit equivalent directly
- [ ] **Preserve all styling**: Keep `buttonVariants` or equivalent CVA exactly as-is
- [ ] **Keep all variants and sizes**: No visual changes allowed

### 3. **Storybook Configuration** (`.storybook/main.ts`)

- [ ] **Ensure Tailwind plugin**: Import and use `@tailwindcss/vite`
- [ ] **Configure path aliases**: Set up `@` to resolve to `../src`
- [ ] **Import global styles**: Add CSS import in `preview.ts`

### 4. **Stories File Updates** (`src/components/[component].stories.tsx`)

- [ ] **Remove `asChild` from argTypes**: Delete outdated control
- [ ] **Add render prop stories**: Create 3 new stories:
  - `AsLink`: Basic `render={(props)=> <a href="..." {...props} />}` example
  - `UsingRenderProp`: Router component example
  - `NavigationButtons`: Multiple variants as links
- [ ] **Preserve existing stories**: Keep all current examples unchanged
- [ ] **Update documentation**: Add JSDoc comments explaining render prop usage

### 5. **Common Radix → Ariakit Mappings**

```tsx
// Button/Clickable elements
@radix-ui/react-slot → @ariakit/react (Button component)

// Dialog/Modal
@radix-ui/react-dialog → @ariakit/react (Dialog components)

// Popover
@radix-ui/react-popover → @ariakit/react (Popover components)

// Select
@radix-ui/react-select → @ariakit/react (Select components)

// Tabs
@radix-ui/react-tabs → @ariakit/react (Tab components)
```

### 6. **Quality Checks**

- [ ] **Visual parity**: All components look identical
- [ ] **Functionality preserved**: All interactions work the same
- [ ] **Accessibility improved**: Ariakit provides better a11y
- [ ] **TypeScript errors resolved**: No compilation issues
- [ ] **Storybook builds**: All stories render correctly

### 7. **Example Template**

```tsx
// Before (Radix)
import { Slot } from "@radix-ui/react-slot";
function Component({ asChild, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp {...props} />;
}

// After (Ariakit)
import { Button } from "@ariakit/react";
function Component({ ...props }: React.ComponentProps<typeof Button>) {
  return <Button {...props} />;
}

// Story examples
export const AsLink: Story = {
  args: { render: <a href="/link" />, children: "Link" },
};
```

### 8. **Final Cleanup**

- [ ] **Remove unused Radix packages**: Only after all components migrated
- [ ] **Update documentation**: Note render prop pattern in component docs
- [ ] **Test all stories**: Verify Storybook renders correctly
- [ ] **Run type check**: Ensure no TypeScript errors

## Notes

- **Component API backwards compatibility is not important**
- **All styling, variants, composition, and visual design MUST be preserved**
- Use this checklist for every shadcn component migration to ensure consistency
