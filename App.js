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
import Dual from './components/Dual';

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
        <Stack.Screen name="Dual" component={Dual} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
