import React, {Component, useEffect} from 'react';
import {View, Text, Image, Button, Animated, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Card} from '../scene/component/card';

const detail = ({route}) => {
  const animation = new Animated.Value(0);
  const secondObject = new Animated.Value(0);
  const {data} = route.params;

  useEffect(() => {
    startAnimation();
    startSecondAnimation();
  }, []);
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 100,
      duration: 2000,
    }).start();
  };

  const startSecondAnimation = () => {
    Animated.timing(secondObject, {
      toValue: -150,
      duration: 2000,
    }).start();
  };
  const transformStyle = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };
  const transformStyleSecond = {
    transform: [
      {
        translateY: secondObject,
      },
    ],
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View style={transformStyle}>
        <Image
          source={{uri: data.picture}}
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
            borderRadius: 50,
            alignSelf: 'center',
          }}
        />
      </Animated.View>

      <Animated.View style={[styles.viewStyle, transformStyleSecond]}>
        <Text>{JSON.stringify(data)}</Text>
      </Animated.View>
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    width: 250,
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 5,
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
