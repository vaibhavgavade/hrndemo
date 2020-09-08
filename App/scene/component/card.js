import React from 'react';
import {View} from 'react-native';

export const Card = (props) => (
  <View
    style={{
      // flex: 1,
      backgroundColor: '#fffff0',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      shadowColor: '#a9a9a9',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 10,
    }}>
    {props.children}
  </View>
);
