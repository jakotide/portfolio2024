import React, { createContext, useState, useContext, useCallback } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorSize, setCursorSize] = useState(12);
  const [cursorText, setCursorText] = useState("");
  const [cursorColor, setCursorColor] = useState("white");
  const [isBlending, setIsBlending] = useState(true);
  const [cursorTextColor, setCursorTextColor] = useState("white");

  const handleHoverStart = useCallback(() => {
    setCursorSize(64);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setCursorSize(12);
    setCursorText("");
    setIsBlending(true);
    setCursorColor("white");
  }, []);

  const handleHoverCard = useCallback(() => {
    setCursorText("View");
    setCursorSize(64);
    setCursorColor("white");
    setIsBlending(false);
    setCursorTextColor("black");
  }, []);

  const handleSelectedHoverCard = useCallback(() => {
    setCursorText("View");
    setCursorSize(64);
    setCursorColor("black");
    setIsBlending(false);
    setCursorTextColor("white");
  }, []);

  const handleHoverNavItem = useCallback((color) => {
    setCursorColor(color);
    setIsBlending(false);
    setCursorSize(64);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorSize,
        cursorText,
        cursorColor,
        isBlending,
        cursorTextColor,
        handleHoverNavItem,
        handleHoverStart,
        handleHoverEnd,
        handleHoverCard,
        handleSelectedHoverCard,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
