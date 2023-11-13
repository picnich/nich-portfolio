"use client";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

export function LenisProvider({
  children,
  options,
  ...props
}) {
  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  );
}
