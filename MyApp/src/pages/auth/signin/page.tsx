import React, { useMemo, useState } from 'react';
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
  useNavigation,
} from '@react-navigation/native';
import { useAppTheme } from '../../../theme/ThemeProvider';
import createStyles from './style';

const Signin = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useAppTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [secureConfirmEntry, setSecureConfirmEntry] = useState(true);

  const handleCreateAccount = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Missing info', 'Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Mismatch', 'Passwords do not match.');
      return;
    }

    navigation.navigate('verifyEmail', { email });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Full name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Jane Doe"
              placeholderTextColor={theme.colors.border}
              autoCapitalize="words"
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholder="you@example.com"
              placeholderTextColor={theme.colors.border}
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureEntry}
                placeholder="••••••••"
                placeholderTextColor={theme.colors.border}
                autoComplete="password"
                style={[styles.input, styles.passwordInput]}
              />
              <TouchableOpacity
                onPress={() => setSecureEntry(!secureEntry)}
                style={styles.toggleSecure}
              >
                <Text style={styles.toggleSecureText}>
                  {secureEntry ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Confirm password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={secureConfirmEntry}
                placeholder="••••••••"
                placeholderTextColor={theme.colors.border}
                autoComplete="password"
                style={[styles.input, styles.passwordInput]}
              />
              <TouchableOpacity
                onPress={() => setSecureConfirmEntry(!secureConfirmEntry)}
                style={styles.toggleSecure}
              >
                <Text style={styles.toggleSecureText}>
                  {secureConfirmEntry ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
            <Text style={styles.buttonText}>Create account</Text>
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

export default Signin;
