import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import logo from '../../assets/images/logo.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function AboutUs({navigation}) {
  const dp = require('../../assets/images/dp.png');
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <AntDesign
        name="arrowleft"
        size={width(6)}
        color={AppColors.black}
        style={{marginTop: height(2), marginLeft: width(4)}}
        onPress={() => navigation.goBack()}
      />
      <TouchableOpacity style={styles.callContainer}>
        <Ionicons name="call-outline" size={width(4)} color={AppColors.black} />
      </TouchableOpacity>
      <Text style={styles.txt1}>About Us:</Text>
      <Text style={{...styles.txt1, marginTop: height(20)}}>Ask Us:</Text>
      <View style={styles.msgType}>
        <TextInput
          style={styles.input}
          placeholder="Write something..."></TextInput>
      </View>
      <TouchableOpacity style={styles.sendReview}>
        <Text style={styles.reviewTxt}>Send Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
