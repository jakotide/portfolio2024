"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export const LenisSmoothScroll = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
