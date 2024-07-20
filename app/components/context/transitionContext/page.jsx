import React, { useState, useCallback, useContext, createContext } from "react";

const TransitionContext = createContext();

export const TransitionContextProvider = ({ children }) => {
  const [transitionAnimation, setTransitionAnimation] = useState(false);

  const startAnimation = useCallback(() => {
    setTransitionAnimation(true);
  });
  const endAnimation = useCallback(() => {
    setTransitionAnimation(false);
  });

  return (
    <TransitionContext.Provider
      value={{
        transitionAnimation,
        setTransitionAnimation,
        startAnimation,
        endAnimation,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionProvider = () => useContext(TransitionContext);
