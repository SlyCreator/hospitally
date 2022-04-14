import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';

//import { store } from './store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import AddressScreen from './screens/AddressScreen';
import AddAddressScreen from './screens/AddAddressScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchHospitalScreen from './screens/SearchHospitalScreen';
import MapScreen from './screens/MapScreen';
import FlashMessage from "react-native-flash-message";
const LoadingSpinner = () => {
  const { isLoading } = useAppSelector((state) => state.loading)
  return <Spinner visible={isLoading} color={"black"} />
}


export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <SafeAreaProvider>
      <FlashMessage position="top" /> 

        <Stack.Navigator>
            <Stack.Screen name='Home'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name='SignUp'
            component={SignUpScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name='SignIn'
            component={SignInScreen}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen name='Address'
            component={AddressScreen}
            options={{
              headerShown: true
            }}
          />
          <Stack.Screen name='AddAddress'
            component={AddAddressScreen}
            options={{
              headerShown: true
            }} />
          <Stack.Screen name='Profile'
            component={ProfileScreen}
            options={{
              headerShown: true
            }} />
          <Stack.Screen name='Search'
            component={SearchHospitalScreen}
            options={{
              headerShown: true
            }}
          />
          <Stack.Screen name='Map'
            component={MapScreen}
            options={{
              headerShown: true
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