Tooltip
===

Tooltip is an intuitive and lightweight library designed to manage tooltips efficiently.

Usage
---

Tooltip leverages the Floating library for its underlying operations. To utilize Tooltip effectively, you must fulfill the prerequisites of the Floating library.

### Setting Up the Portal Root

```tsx
interface RootLayoutProps extends PropsWithChildren {}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      {children}
      <Floater />
    </body>
  </html>
)
```

### Creating a Tooltip

To create a tooltip, embed the following components into your application:

```tsx
const Home = () => (
  <main className="flex h-screen w-screen items-center justify-center">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover over me</Button>
      </TooltipTrigger>
      <TooltipContent className="rounded bg-primary px-2 py-1 text-secondary text-sm">Tooltip!</TooltipContent>
    </Tooltip>
  </main>
)
```

Optionally, the `TooltipTrigger` can function as a standard HTML button by omitting the `asChild` attribute.

```tsx
<TooltipTrigger>
  I'm a trigger button!
</TooltipTrigger>
```

When hovering over a `TooltipTrigger`, the `TooltipContent` appears after a delay of 700 milliseconds, known as the delayDuration.

If you stop hovering and then quickly hover back over the `TooltipTrigger` within 300 milliseconds, the `TooltipContent` will display immediately without the initial delay, utilizing what is called the skipDelayDuration.
