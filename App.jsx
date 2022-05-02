import { StatusBar } from 'expo-status-bar';
import React,{useReducer} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
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
import { store,reducer } from './store/store';


const LoadingSpinner = () => {
  const { isLoading } = useAppSelector((state) => state.loading)
  return <Spinner visible={isLoading} color={"black"} />
}

export const UserContext = React.createContext()

export default function App() {
const [state,dispatch]  = useReducer(store,reducer)
  const Stack = createNativeStackNavigator();
  return (
    <UserContext.Provider value={{userData:state,userDispatch:dispatch}}>
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
    </UserContext.Provider>
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