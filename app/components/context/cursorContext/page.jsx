import React, { createContext, useState, useContext, useCallback } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorSize, setCursorSize] = useState(12);
  const [cursorText, setCursorText] = useState("");

  const handleHoverStart = useCallback(() => {
    setCursorSize(58);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setCursorSize(12);
    setCursorText("");
  }, []);

  const handleHoverCard = useCallback(() => {
    setCursorText("View");
    setCursorSize(64);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorSize,
        cursorText,
        handleHoverStart,
        handleHoverEnd,
        handleHoverCard,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
