import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import logo from '../../assets/images/logo.png';
export default function Login({navigation}) {
  const fb = require('../../assets/images/facebook.png');
  const google = require('../../assets/images/google.png');
  return (
    <View style={styles.mainViewContainer}>
      <Image resizeMode="contain" source={logo} style={styles.imageContainer} />
      <Text style={styles.txt1}>Log In</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Email"
        placeholderTextColor={AppColors.sementic1}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Password"
        placeholderTextColor={AppColors.sementic1}
        secureTextEntry
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.loginContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginTxt}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orTxt}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <Container img={fb} txt="Log In with Facebook" />
      <Container img={google} txt="Log In with Google" />

      <View style={styles.signUp}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpTxt}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Container = ({img, txt}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image source={img} style={styles.imageContainer1} resizeMode="contain" />
      <Text style={styles.txt2}>{txt}</Text>
    </TouchableOpacity>
  );
};
