import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({
  themeMode: 'Light',
  darkMode: () => {},
  lightMode: () => {},

});

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
  return useContext(ThemeProvider)
}