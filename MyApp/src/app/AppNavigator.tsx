import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from '../pages/auth/login/page';
import Signin from '../pages/auth/signin/page';
import VerifyOtp from '../pages/auth/verify-email/page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { useAppTheme } from '../theme/ThemeProvider';
enableScreens();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="verifyEmail" component={VerifyOtp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
