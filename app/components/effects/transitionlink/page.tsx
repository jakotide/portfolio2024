// "use client";
// import Link, { LinkProps } from "next/link";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { useTransitionProvider } from "../../context";

// interface TransitionLinkProps extends LinkProps {
//   children: React.ReactNode;
//   href: string;
//   className: string;
// }

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export const TransitionLink: React.FC<TransitionLinkProps> = ({
//   children,
//   href,
//   className,
//   ...props
// }) => {
//   const router = useRouter();
//   const { startAnimation, useEndAnimation, endSequence } =
//     useTransitionProvider();

//   const handleTransition = async (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     e.preventDefault();
//     startAnimation();
//     await sleep(1000);
//     router.push(href);
//     await sleep(1000);
//     useEndAnimation();
//     await sleep(1000);
//     endSequence();
//     console.log("End of transition");
//   };

//   return (
//     <Link {...props} href={href} onClick={handleTransition}>
//       {children}
//     </Link>
//   );
// };
"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useTransitionProvider } from "../../context";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();
  const { startAnimation, endAnimation, completeAnimation } =
    useTransitionProvider();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    startAnimation();
    await sleep(1000);
    router.push(href);
    await sleep(1000);
    endAnimation();
    await sleep(1000);
    completeAnimation();
    console.log("End of transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
