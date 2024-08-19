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
// import { useRef } from "react";

// export const useScrollLock = () => {
//   const scroll = useRef(false);

//   const blockScroll = () => {
//     if (typeof document === "undefined") return;

//     const html = document.documentElement;
//     const { body } = document;

//     if (!body?.style || scroll.current) return;

//     const scrollBarWidth = window.innerWidth - html.clientWidth;
//     const bodyPaddingRight =
//       parseInt(
//         window.getComputedStyle(body).getPropertyValue("padding-right")
//       ) || 0;

//     // html.style.position = "relative";
//     // body.style.position = "static";
//     html.style.overflow = "hidden";
//     body.style.overflow = "hidden";
//     body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

//     scroll.current = true;
//   };

//   const allowScroll = () => {
//     if (typeof document === "undefined") return;

//     const html = document.documentElement;
//     const { body } = document;

//     if (!body?.style || !scroll.current) return;

//     html.style.position = "";
//     html.style.overflow = "";
//     body.style.position = "";
//     body.style.overflowY = "auto";
//     body.style.paddingRight = "";

//     scroll.current = false;
//   };

//   return [blockScroll, allowScroll] as const;
// };
