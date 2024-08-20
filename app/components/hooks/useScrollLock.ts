import { useEffect, useCallback } from "react";

export function useScrollLock(lock: boolean, delay: number = 300) {
  const html = document.documentElement;
  const { body } = document;

  const scrollBarWidth = window.innerWidth - html.clientWidth;
  const bodyPaddingRight =
    parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) ||
    0;

  const lockScroll = useCallback(() => {
    const scrollY = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    const preventDefault = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";

      window.scrollTo(0, scrollY);

      document.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let unlockScroll: (() => void) | undefined;

    if (lock) {
      const timer = setTimeout(() => {
        unlockScroll = lockScroll();
      }, delay);

      return () => {
        clearTimeout(timer);
        if (unlockScroll) {
          unlockScroll();
        }
      };
    }
  }, [lock, lockScroll, delay]);
}

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

//     html.style.position = "relative";
//     body.style.position = "relative";
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
