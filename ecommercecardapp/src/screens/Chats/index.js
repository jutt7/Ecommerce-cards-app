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
export default function Chats({navigation}) {
  const dp = require('../../assets/images/dp.png');
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <AntDesign
        name="arrowleft"
        size={width(5)}
        color={AppColors.black}
        style={{marginLeft: width(4.2), marginTop: height(2)}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.topContainer}>
        <Text style={styles.txt1}>Chat</Text>
        <AntDesign name="search1" size={width(7)} color={AppColors.black} />
      </View>
      <View
        style={{
          marginHorizontal: -width(2),
          height: height(78),
          marginTop: height(2),
        }}>
        <ScrollView>
          <Message
            img={dp}
            name={'James Gouse'}
            msg={
              'Okay, No problem with that you’ll recieve the delivery within a week.'
            }
            num={2}
            time={'20:30'}
            navigation={navigation}
          />
          <Message
            img={dp}
            name={'James Gouse'}
            msg={
              'Okay, No problem with that you’ll recieve the delivery within a week.'
            }
            num={2}
            time={'20:30'}
            navigation={navigation}
          />
          <Message
            img={dp}
            name={'James Gouse'}
            msg={
              'Okay, No problem with that you’ll recieve the delivery within a week.'
            }
            num={1}
            time={'20:30'}
            navigation={navigation}
          />
          <Message
            img={dp}
            name={'James Gouse'}
            msg={
              'Okay, No problem with that you’ll recieve the delivery within a week.'
            }
            num={3}
            time={'20:30'}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const Message = ({img, name, time, msg, num, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginTop: height(3), paddingHorizontal: width(4)}}
      onPress={() => navigation.navigate('ChatScreen')}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={img}
          style={{
            height: height(6),
            width: height(6),
            borderRadius: height(100),
          }}
        />
        <View style={{marginLeft: width(2)}}>
          <Text style={{fontWeight: '600'}}>{name}</Text>

          <Text
            style={{
              width: width(72),
              marginTop: height(0.5),
              height: height(4.5),
            }}>
            {msg}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: width(2), color: AppColors.sementic5}}>
            {time}
          </Text>
          <View
            style={{
              height: height(2.5),
              width: height(2.5),
              backgroundColor: AppColors.primary2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: height(100),
              marginTop: height(0.5),
              alignSelf: 'flex-end',
            }}>
            <Text style={{color: AppColors.white}}>{num}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
