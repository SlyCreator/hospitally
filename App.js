import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';

//import { store } from './store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
          <Stack.Screen name='SignUp' 
              component={SignUp}
              options={{
                headerShown:false
              }}
            />
          <Stack.Screen name='SignIn' 
              component={SignIn}
              options={{
                headerShown:false
              }}
            />
            <Stack.Screen name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>

      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
