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
import card1 from '../../assets/images/card1.png';
export default function Item({navigation, checked}) {
  const menu = require('../../assets/images/menu.png');
  const card = require('../../assets/images/card1.png');

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.mainViewContainer}>
      <View style={styles.outer}>
        {checked ? <View style={styles.inner}></View> : null}
      </View>
      <Image source={card1} resizeMode="contain" style={styles.imgContainer} />
      <View style={styles.detailContainer}>
        <Text>Sport Card</Text>
        <Text style={styles.priceTxt}>$199.50</Text>
        <Text style={styles.descTxt}>The item descreiption will be here</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.container1}>
          <AntDesign name="plus" size={height(1.8)} color={AppColors.white} />
        </TouchableOpacity>
        <Text style={styles.txt1}>2</Text>
        <TouchableOpacity style={styles.container1}>
          <AntDesign name="minus" size={height(1.8)} color={AppColors.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
