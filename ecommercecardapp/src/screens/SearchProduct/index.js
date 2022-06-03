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
import Item from '../../components/Item';
export default function SearchProduct({navigation}) {
  const card1 = require('../../assets/images/card1.png');
  const logo = require('../../assets/images/logo.png');
  const setting = require('../../assets/images/setting.png');

  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={width(6)} color={AppColors.black} />
        </TouchableOpacity>
        <Image
          source={logo}
          style={styles.logoContainer}
          resizeMode="contain"
        />
      </View>
      <View style={styles.searchView}>
        <Search />
        <Image
          source={setting}
          style={styles.logoContainer}
          resizeMode="contain"
        />
      </View>
      {/* <TouchableOpacity
        onPress={() => !checked}
        style={{backgroundColor: 'pink'}}> */}
      <View style={{marginTop: height(5)}}>
        <Item checked={false} />
        <Item checked={false} />
        <Item checked={false} />
        <Item checked={false} />
      </View>
      {/* </TouchableOpacity> */}

      <TouchableOpacity activeOpacity={0.6} style={styles.payContainer}>
        <Text style={styles.txt2}>Proceed to Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={width(5.5)} color={AppColors.primary2} />
      <TextInput style={styles.txt1} placeholder="Search Products" />
    </View>
  );
};
