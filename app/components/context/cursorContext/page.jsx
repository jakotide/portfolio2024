import React, { createContext, useState, useContext, useCallback } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorSize, setCursorSize] = useState(12);

  const handleHoverStart = useCallback(() => {
    setCursorSize(42);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setCursorSize(12);
  }, []);

  return (
    <CursorContext.Provider
      value={{ cursorSize, handleHoverStart, handleHoverEnd }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
