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
      marginTop: 6,
      fontSize: 15,
      color: theme.colors.text,
      opacity: 0.75,
    },
    field: {
      marginTop: 18,
    },
    label: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingVertical: 12,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
    passwordRow: {
      position: 'relative',
    },
    passwordInput: {
      paddingRight: 64,
    },
    toggleSecure: {
      position: 'absolute',
      right: 12,
      top: 12,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    toggleSecureText: {
      color: theme.colors.primary,
      fontWeight: '600',
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
