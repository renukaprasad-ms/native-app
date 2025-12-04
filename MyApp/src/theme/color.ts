// src/themes/colors.ts
import { Theme } from '@react-navigation/native';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#4A90E2',
    card: '#F2F2F2',
    border: '#DADADA',
    notification: '#FF4D4D',
  },
  fonts: {
    regular: { fontFamily: 'System', fontWeight: '400' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    bold: { fontFamily: 'System', fontWeight: '700' },
    heavy: { fontFamily: 'System', fontWeight: '800' },
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#4A90E2',
    card: '#1A1A1A',
    border: '#333333',
    notification: '#FF6B6B',
  },
  fonts: {
    regular: { fontFamily: 'System', fontWeight: '400' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    bold: { fontFamily: 'System', fontWeight: '700' },
    heavy: { fontFamily: 'System', fontWeight: '800' },
  },
};
