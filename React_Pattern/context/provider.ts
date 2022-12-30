import React from "react";

interface backgoundCss {
  background: string;
  color: string;
}

interface themeObject {
  theme: backgoundCss;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<themeObject | null>(null);
