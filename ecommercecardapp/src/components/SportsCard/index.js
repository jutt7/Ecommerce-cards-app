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
export default function SportsCard({navigation, checked, img, price}) {
  const menu = require('../../assets/images/menu.png');

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.mainViewContainer}
      onPress={() => navigation.navigate('Product')}>
      <TouchableOpacity activeOpacity={0.6} style={styles.heartContainer}>
        <AntDesign
          name="heart"
          size={width(3)}
          color={checked ? AppColors.red : AppColors.sementic4}
        />
      </TouchableOpacity>
      <Image source={img} resizeMode="contain" style={styles.imgContainer} />
      <View style={styles.innerContainer}>
        <Text>Sport Card</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.cartContainer}>
          <Text style={styles.txt1}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt2}>{price}</Text>
    </TouchableOpacity>
  );
}
