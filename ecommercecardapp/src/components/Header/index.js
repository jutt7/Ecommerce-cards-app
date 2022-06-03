import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import logo from '../../assets/images/logo.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Header({navigation}) {
  const menu = require('../../assets/images/menu.png');

  return (
    <SafeAreaView
      style={
        Platform.OS === 'android'
          ? {...styles.mainViewContainer, marginTop: height(1)}
          : styles.mainViewContainer
      }>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={menu}
            resizeMode="contain"
            style={styles.imgContainer}
          />
        </TouchableOpacity>
        <Image
          source={logo}
          resizeMode="contain"
          style={styles.logoContainer}
        />
        <View style={styles.container1}>
          <FontAwesome
            name="send"
            size={width(5)}
            color="black"
            onPress={() => navigation.navigate('Chats')}
          />
          <AntDesign
            name="bells"
            size={width(5.5)}
            color="black"
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
