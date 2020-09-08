import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Button,
} from 'react-native';

const ScaleObject = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(1);

  const AnimationStart = () => {
    console.log('onpress called');
    Animated.timing(animation, {
      toValue: 3, //scale object -3 means it alter position of view -3 values
      duration: 1000,
    }).start();
  };
  const transformobj = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPressOut={() => AnimationStart()}>
        <Animated.View style={[animatedView, transformobj]}>
          <Text>vaibahv</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Button title="Go Next" onPress={() => navigation.navigate('width')} />
    </View>
  );
};

export default ScaleObject;

const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedView: {
    backgroundColor: 'tomato',
    height: 100,
    width: 100,
  },
});
