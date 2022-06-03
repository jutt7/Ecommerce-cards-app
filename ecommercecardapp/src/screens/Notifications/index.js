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
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SportsCard from '../../components/SportsCard';

export default function Notifications({navigation}) {
  const dp = require('../../assets/images/dp.png');

  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={width(6)} color={AppColors.black} />
      </TouchableOpacity>
      <Text style={styles.txt1}>Notifications</Text>
      <Notification img={dp} txt={'Sarik'} time={'20.30'} />
      <Notification
        img={dp}
        txt={
          'Okay, No problem with that you’ll recieve the delivery withina week.'
        }
        time={'20.30'}
      />
      <Notification
        img={dp}
        txt={
          'Okay, No problem with that you’ll recieve the delivery withina week.'
        }
        time={'20.30'}
      />
      <Notification
        img={dp}
        txt={
          'Okay, No problem with that you’ll recieve the delivery withina week.'
        }
        time={'20.30'}
      />
    </SafeAreaView>
  );
}

const Notification = ({img, txt, time}) => {
  return (
    <TouchableOpacity style={styles.notificationContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: width(80),
        }}>
        <Image source={img} resizeMode="contain" style={styles.imgContainer} />
        <Text style={styles.txt2}>{txt}</Text>
      </View>
      <Text style={styles.txt3}>{time}</Text>
    </TouchableOpacity>
  );
};
