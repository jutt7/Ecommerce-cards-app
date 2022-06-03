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
export default function SignUp({navigation}) {
  return (
    <View style={styles.mainViewContainer}>
      <Image resizeMode="contain" source={logo} style={styles.imageContainer} />
      <Text style={styles.txt1}>Sign Up</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Username"
        placeholderTextColor={AppColors.sementic1}
      />
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
      <TextInput
        style={styles.inputContainer}
        placeholder="Confrim password"
        placeholderTextColor={AppColors.sementic1}
        secureTextEntry
      />
      <TouchableOpacity activeOpacity={0.6} style={styles.loginContainer}>
        <Text style={styles.loginTxt}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signUp}>
        <Text style={{color: AppColors.sementic2}}>
          Already have an account?
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpTxt}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
