import React, { createContext, useContext, useState, useCallback } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [navStyle, setNavStyle] = useState(false);
  const [BgColor, setBgColor] = useState("initialColor");

  const updateNavStyle = useCallback(() => {
    setNavStyle(true);
  }, []);

  const resetNavStyle = useCallback(() => {
    setNavStyle(false);
  }, []);

  const updateBgColor = useCallback((color) => {
    setBgColor(color);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        navStyle,
        updateNavStyle,
        resetNavStyle,
        BgColor,
        updateBgColor,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollProvider = () => useContext(ScrollContext);
