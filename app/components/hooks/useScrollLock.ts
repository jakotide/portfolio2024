import { useEffect, useCallback } from "react";

export function useScrollLock(lock: boolean) {
  const lockScroll = useCallback(() => {
    const scrollY = window.scrollY; // Store the current scroll position

    // Lock the scroll by setting position to fixed and top to negative scroll position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%"; // Prevent horizontal scroll

    // Prevent scroll on touch devices
    const preventDefault = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      // Restore the original styles
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";

      // Restore the scroll position
      window.scrollTo(0, scrollY);

      // Remove the event listener
      document.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let unlockScroll: (() => void) | undefined;

    if (lock) {
      unlockScroll = lockScroll();
    }

    return () => {
      if (unlockScroll) {
        unlockScroll();
      }
    };
  }, [lock, lockScroll]);
}
