import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home.js'
import ColorPalette from './screens/ColorPalette.js'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ColorPalette" component={ColorPalette}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
