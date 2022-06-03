import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
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
export default function Home({navigation}) {
  const card1 = require('../../assets/images/card1.png');
  const card2 = require('../../assets/images/card2.png');
  const card3 = require('../../assets/images/card3.png');
  const card4 = require('../../assets/images/card4.png');
  return (
    <View style={styles.mainViewContainer}>
      <Header navigation={navigation} />
      <Search navigation={navigation} />
      <Text style={styles.txt2}>Category</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: height(3),
        }}>
        <Category text={'Favorites'}>
          <Entypo name="heart" size={width(6)} color={AppColors.sementic3} />
        </Category>
        <Category text={'Basketball'}>
          <Ionicons
            name="basketball-outline"
            size={width(6)}
            color={AppColors.sementic3}
          />
        </Category>
        <Category text={'Football'}>
          <Ionicons
            name="football"
            size={width(6)}
            color={AppColors.sementic3}
          />
        </Category>
        <Category text={'Baseball'}>
          <MaterialCommunityIcons
            name="baseball-bat"
            size={width(6)}
            color={AppColors.sementic3}
          />
        </Category>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            <SportsCard
              checked={true}
              img={card1}
              price={'$199.50'}
              navigation={navigation}
            />
            <SportsCard
              checked={false}
              img={card2}
              price={'$200'}
              navigation={navigation}
            />
            <SportsCard
              checked={false}
              img={card3}
              price={'$450.50'}
              navigation={navigation}
            />
            <SportsCard
              checked={false}
              img={card4}
              price={'$400'}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const Search = ({navigation}) => {
  return (
    <View style={styles.searchContainer}>
      <AntDesign
        name="search1"
        size={width(5.5)}
        color={AppColors.primary2}
        onPress={() => navigation.navigate('SearchProduct')}
      />
      <TextInput style={styles.txt1} placeholder="Search Products" />
    </View>
  );
};

const Category = ({children, text}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.outerContainer}>
      <View style={styles.categoryContainer}>{children}</View>
      <Text style={styles.categoryTxt}>{text}</Text>
    </TouchableOpacity>
  );
};
