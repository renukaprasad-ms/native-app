import React, { useMemo, useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useAppTheme } from '../../../theme/ThemeProvider';
import createStyles from './style';

const VerifyOtp = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<ParamListBase>>();
  const email = (route.params as { email?: string } | undefined)?.email;

  const theme = useAppTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [code, setCode] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (value: string, index: number) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);

    if (digit && index < inputs.length - 1) {
      inputs[index + 1].current?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      inputs[index - 1].current?.focus();
      setActiveIndex(index - 1);
    }
  };

  const handleVerify = () => {
    const value = code.join('');
    if (value.length < 4) {
      Alert.alert('Incomplete code', 'Enter the 4-digit code from your email.');
      return;
    }

    Alert.alert('Code entered', `Entered: ${value}`);
  };

  const handleResend = () => {
    Alert.alert('Resent', 'Check your inbox for a new code.');
  };

  const isComplete = code.join('').length === 4;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Verify your email</Text>
          <Text style={styles.subtitle}>
            {email
              ? `Enter the 4-digit code we sent to ${email}.`
              : 'Enter the 4-digit code we sent to your email.'}
          </Text>

          <View style={styles.codeRow}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputs[index]}
                value={digit}
                onChangeText={(value) => handleChange(value, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress(nativeEvent.key, index)
                }
                onFocus={() => setActiveIndex(index)}
                keyboardType="number-pad"
                maxLength={1}
                style={[
                  styles.codeInput,
                  activeIndex === index && styles.codeInputActive,
                  digit && styles.codeInputFilled,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            onPress={handleVerify}
            style={[styles.button, !isComplete && styles.buttonDisabled]}
            disabled={!isComplete}
          >
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleResend}
            style={[styles.secondaryActionSpacing, styles.secondaryActionButton]}
          >
            <Text style={styles.secondaryAction}>Resend code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={[styles.secondaryActionSpacing, styles.secondaryActionButton]}
          >
            <Text style={styles.secondaryAction}>Back to login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyOtp;
