import Button from '@/components/button';
import Navigation from '@/navigation';
import theme from '@/utils/theme';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}