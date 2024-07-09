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
    fadeIn(180),
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
