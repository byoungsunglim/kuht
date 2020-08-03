/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './components/Login';
import Home from './components/Home';
import Single from './components/Single';
import Dual from './components/Dual';
import Request from './components/Request';

const Stack = createStackNavigator();

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Single" component={Single} />
        <Stack.Screen name="Dual" component={Dual} />
        <Stack.Screen name="Request" component={Request} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
