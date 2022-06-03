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
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default function CustomDrawer({navigation}) {
  const menu = require('../../assets/images/menu.png');

  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Image
        source={require('../../assets/images/drawerDesign.png')}
        resizeMode="contain"
        style={styles.img}
      />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/dp1.png')}
          resizeMode="contain"
          style={styles.dp}
        />
        <Text style={styles.txt1}>Abdul Sami</Text>
        <Text style={styles.txt2}>i_sami_55</Text>
      </View>
      <Item
        txt={'Profile Details'}
        Icon={FontAwesome}
        iconName={'user'}
        navigation={navigation}
        next={'Profile'}
      />
      <Item
        txt={'Cart'}
        Icon={Feather}
        iconName={'shopping-bag'}
        navigation={navigation}
        next={'Cart'}
      />
      <Item
        txt={'Invite a Friend'}
        Icon={AntDesign}
        iconName={'sharealt'}
        navigation={navigation}
        next={'Invite'}
      />
      <Item
        txt={'Help'}
        Icon={AntDesign}
        iconName={'questioncircleo'}
        navigation={navigation}
        next={'AboutUs'}
      />
      <Item
        txt={'Logout'}
        Icon={SimpleLineIcons}
        iconName={'logout'}
        navigation={navigation}
        next={'Login'}
      />
    </SafeAreaView>
  );
}

const Item = ({txt, Icon, iconName, navigation, next}) => {
  return (
    <TouchableOpacity
      style={{marginLeft: width(3), marginTop: height(2)}}
      onPress={() => navigation.navigate(next)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: height(6),
            width: width(12),
            backgroundColor: AppColors.sementic10,
            borderRadius: width(2),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={iconName} color={AppColors.black} size={width(6)} />
        </View>
        <Text style={{fontWeight: '500', marginLeft: width(4)}}>{txt}</Text>
      </View>
    </TouchableOpacity>
  );
};
