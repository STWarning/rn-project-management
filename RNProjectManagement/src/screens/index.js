import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScreenStack } from '../components/ScreenStack';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer theme={AppTheme}>
        <ScreenStack props />
      </NavigationContainer>
    </PaperProvider>
  );
}
