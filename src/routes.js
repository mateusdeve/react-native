// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main'
import Product from './pages/Product'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
        options={{
            headerStyle: {
                backgroundColor: '#03DAC6',
              },
              headerTintColor: '#fff',
          }}
          name="Home" component={Main} />
          
          <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;