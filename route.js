import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './App/src/home';
import Detail from './App/src/detail';
import ScaleObject from './App/src/tp';

const stack = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Detail} />
        <stack.Screen name="ani" component={ScaleObject} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
