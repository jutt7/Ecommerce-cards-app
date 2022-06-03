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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
export default function ChatScreen({navigation}) {
  const dp = require('../../assets/images/dp.png');
  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.topContainer}>
        <AntDesign
          name="arrowleft"
          size={width(6)}
          color={AppColors.white}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.nameTxt}>James Gouse</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={dp} style={styles.img} />
        <ScrollView>
          <Received
            img={dp}
            txt={
              'Hey Julia, you asked about this cardso tell me if you are intrested'
            }
          />
          <Sent
            img={dp}
            txt={'Yeah, Sure please send me some pictuers of it'}
          />
        </ScrollView>
      </View>
      <View style={styles.msgType}>
        <TextInput
          style={styles.input}
          placeholder="Write something..."></TextInput>
        <TouchableOpacity activeOpacity={0.6} style={styles.sentContainer}>
          <Feather name="send" size={width(6.5)} color={AppColors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Received = ({img, txt}) => {
  return (
    <View style={{marginTop: height(2), marginHorizontal: width(2)}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={img}
          style={{
            height: height(4),
            width: height(4),
            borderRadius: height(100),
          }}
        />
        <View
          style={{
            backgroundColor: AppColors.white,
            paddingVertical: height(2),
            width: width(60),
            marginLeft: width(2),
            borderRadius: width(4),
            paddingHorizontal: width(2),
          }}>
          <Text>{txt}</Text>
        </View>
      </View>
    </View>
  );
};
const Sent = ({img, txt}) => {
  return (
    <View
      style={{
        marginTop: height(2),
        marginHorizontal: width(2),
        alignSelf: 'flex-end',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: AppColors.sementic8,
            paddingVertical: height(2),
            width: width(60),
            marginLeft: width(2),
            borderRadius: width(4),
            paddingHorizontal: width(2),
          }}>
          <Text>{txt}</Text>
        </View>
        <Image
          source={img}
          style={{
            height: height(4),
            width: height(4),
            borderRadius: height(100),
            marginLeft: width(2),
          }}
        />
      </View>
    </View>
  );
};
