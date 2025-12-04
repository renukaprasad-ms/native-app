import React, { PropsWithChildren, createContext, useContext } from 'react';
import { Theme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './color';

const ThemeContext = createContext<Theme>(LightTheme);

export const useAppTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
