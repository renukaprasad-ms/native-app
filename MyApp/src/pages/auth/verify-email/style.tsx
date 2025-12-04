import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    card: {
      backgroundColor: theme.colors.card,
      padding: 24,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
      elevation: 3,
    },
    title: {
      fontSize: 28,
      fontWeight: '800',
      color: theme.colors.text,
    },
    subtitle: {
      marginTop: 8,
      fontSize: 15,
      color: theme.colors.text,
      opacity: 0.75,
      lineHeight: 22,
    },
    codeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
    },
    codeInput: {
      width: 64,
      height: 64,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.background,
      textAlign: 'center',
      fontSize: 22,
      color: theme.colors.text,
    },
    codeInputActive: {
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.primary,
      shadowOpacity: 0.15,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      elevation: 2,
    },
    codeInputFilled: {
      borderColor: theme.colors.primary,
    },
    button: {
      marginTop: 24,
      backgroundColor: theme.colors.primary,
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
    },
    buttonText: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: '700',
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    secondaryAction: {
      textAlign: 'center',
      color: theme.colors.primary,
      fontWeight: '600',
    },
    secondaryActionSpacing: {
      marginTop: 12,
    },
    secondaryActionButton: {
      marginTop: 8,
      alignItems: 'center',
    },
  });

export default createStyles;
