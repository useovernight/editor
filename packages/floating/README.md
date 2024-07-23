Floating
===

Floating is a simple library for positioning floating elements

Usage
---

Start by creating a `<Floater />` inside the body of your web app. This element will be used as a portal root to render all floating elements.

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

Use the `useFloating` hook to create an anchor for all `<FloatingElement>` used in the same context. You can create a custom component like the following:

```tsx
const Anchor = () => {
  const anchorElementRef = useRef<HTMLDivElement | null>(null)
  const anchorBoundary = useElementBoundary(anchorElementRef)

  const { toggle } = useFloating()

  return (
    <div
      ref={anchorElementRef}
      className="cursor-pointer select-none bg-blue-300 p-2"
      onClick={() => toggle(anchorBoundary)}
    >
      Anchor
    </div>
  )
}
```

Inside a `<Floating>` element, insert your previously created `<Anchor>` element and a `<FloatingElement>`.
You can insert as many `<FloatingElement>` as you want.
Each `<FloatingElement>` requires a mandatory placement property, and the display can be adjusted with an optional middlewares array.

```tsx
const Home = () => {
  const middlewares = [
    fadeIn(),
    animate(180),
    offset({
      mainAxis: 16
    })
  ]

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Floating>
        <Anchor />
        <FloatingElement className="bg-red-400 p-2" placement="bottom" middlewares={middlewares}>
          Hello
        </FloatingElement>
      </Floating>
    </main>
  )
}
```

Middlewares
---

This library provides a collection of middleware to enhance the behavior of your floating elements, such as transitions and positioning adjustments. Here's an overview of the available middleware

### offset

The `offset` middleware adjusts the position of a floating element relative to its anchor, allowing you to define precise placement along three axes: main, cross, and alignment.

The main axis corresponds to the direction of placement (e.g., from bottom to top for a placement of "top").

The cross axis is perpendicular to the main axis, running left to right or top to bottom depending on the placement.

The alignment axis, similar to the cross axis, can be adjusted from right to left or bottom to top based on the placement orientation.

Each axis’s adjustment is optional and defined in the middleware settings.

```tsx
const middlewares = [
  offset({
    mainAxis: 16,
    crossAxis: 5,
    alignmentAxis: 10
  })
]
```

### fadeIn

Use the `fadeIn` middleware to gracefully introduce a floating element with a fade-in effect.

This middleware should be paired with the `animate` middleware to control the timing of the fade effect.

```tsx
const middlewares = [
  fadeIn(),
  animate(180)
]
```

### slideIn

Use the `slideIn` middleware to animate the appearance of a floating element by sliding it into view from its placement direction.

The slide distance can be optionally specified in pixels and must be combined with the `animate` middleware to set the duration of the slide.

```tsx
const middlewares = [
  slideIn(10),
  animate(180)
]
```

### zoomIn

Use the `zoomIn` middleware to scale a floating element from a different size upon its appearance.

The scale value, which is optional, sets the initial size of the element relative to its final size.

Pair this middleware with `animate` to specify the duration of the zoom effect.

```tsx
const middlewares = [
  zoomIn(0.8),
  animate(180)
]
```

### animate

The `animate` middleware is essential for enabling the temporal aspects of the aforementioned effects. It specifies the duration for all animations in milliseconds, ensuring smooth transitions for any combined effects.

```tsx
const middlewares = [
  fadeIn(),
  slideIn(),
  zoomIn(),
  animate(180)
]
```
