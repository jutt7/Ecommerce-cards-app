import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
  // Animated,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import AppColors from '../../utils/AppColors';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import logo from '../../assets/images/logo.png';
export default function Splash({navigation}) {
  const logo = require('../../assets/images/logo.png');

  const animation = useSharedValue(1);
  const transform = useSharedValue(1);
  const transform1 = useSharedValue(1);
  const transformX2 = useSharedValue(1);
  const transformY2 = useSharedValue(1);
  const transformX3 = useSharedValue(1);
  const transformY3 = useSharedValue(1);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(animation.value, {
            duration: 1000,
          }),
        },
        {translateY: withTiming(transform.value, {duration: 1000})},
      ],
    };
  });

  const animationStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(transform1.value, {duration: 1000})}],
    };
  });
  const animationStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(transformX2.value, {duration: 1000})},
        {translateY: withTiming(transformY2.value, {duration: 1000})},
      ],
    };
  });
  const animationStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(transformX3.value, {duration: 1000})},
        {translateY: withTiming(transformY3.value, {duration: 1000})},
      ],
    };
  });

  setTimeout(() => {
    animation.value = height(0.2);
    transform1.value = -width(200);
    transformX2.value = -width(20);
    transformY2.value = -height(20);
    setTimeout(() => {
      transform.value = -height(8);
      transformX3.value = width(95);
      transformY3.value = height(12);
    }, 1200);
  }, 200);

  return (
    <View style={styles.mainViewContainer}>
      <Animated.View
        style={[
          {
            alignSelf: 'center',
            marginTop: height(30),
          },
          animationStyle,
        ]}>
        <Image
          source={logo}
          style={{height: height(14)}}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={[
          {
            height: height(40),
            width: height(40),
            borderRadius: height(100),
            backgroundColor: AppColors.primary,
            position: 'absolute',
            bottom: -height(8),
            right: -width(60),
          },
          animationStyle1,
        ]}></Animated.View>

      <Animated.View
        style={[
          {marginTop: height(38), marginLeft: width(30)},
          animationStyle2,
        ]}>
        <Image
          source={require('../../assets/images/threecards.png')}
          resizeMode="contain"
          style={{
            height: height(40),
            width: width(60),
          }}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            height: height(5),
            width: width(30),
            backgroundColor: AppColors.primary,
            position: 'absolute',
            bottom: height(15),
            left: -width(30),

            borderRadius: width(3),
          },
          animationStyle3,
        ]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.6}
          style={{
            height: height(5),
            width: width(30),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: width(3),
          }}>
          <Text style={{color: AppColors.white, fontSize: width(3)}}>
            Get Started {'>'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
