import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {height, width} from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utils/AppColors';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <AntDesign
          style={styles.icon}
          name="arrowleft"
          size={24}
          color={AppColors.black}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.one}>
        <Text style={styles.text1}>Profile</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.logoo}
          resizeMode="contain"
          source={require('../../assets/images/profilepic.png')}
        />
        <View style={styles.iconContainer}>
          <Feather
            name="camera"
            size={24}
            color="#282C35"
            // style={{alignSelf: 'center'}}
            // onPress={() => navigation.navigate('HomeScreen')}
          />
        </View>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
        style={styles.textFields}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>First Name</Text>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
            }}>
            <TextInput
              style={styles.textinput}
              underlineColorAndroid="transparent"
              placeholderTextColor={AppColors.black}
              placeholder="John"
              fontWeight="600"
              backgroundColor="#F2F2F2"
              autoCapitalize="none"></TextInput>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Last Name</Text>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
            }}>
            <TextInput
              style={styles.textinput}
              underlineColorAndroid="transparent"
              placeholderTextColor={AppColors.black}
              placeholder="Malik"
              fontWeight="600"
              backgroundColor="#F2F2F2"
              autoCapitalize="none"></TextInput>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Email</Text>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
            }}>
            <TextInput
              style={styles.textinput}
              underlineColorAndroid="transparent"
              placeholder="williammalik4455@gmail.com"
              placeholderTextColor={AppColors.black}
              fontWeight="600"
              backgroundColor="#F2F2F2"
              autoCapitalize="none"></TextInput>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Change Password:</Text>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
            }}>
            <TextInput
              style={styles.textinput}
              underlineColorAndroid="transparent"
              placeholder="Enter your password"
              placeholderTextColor={AppColors.black}
              fontWeight="600"
              backgroundColor="#F2F2F2"
              autoCapitalize="none"
              secureTextEntry></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.sendReview}>
          <Text style={styles.reviewTxt}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  one: {
    height: 60,
    width: '100%',
  },
  text1: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    color: AppColors.black,
  },
  conatiner1: {
    marginTop: 20,
    marginLeft: 50,
    flexDirection: 'row',
    //
    alignSelf: 'center',
    height: 150,
    width: '45%',
    justifyContent: 'center',
  },
  logoo: {
    // marginBottom: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  logoo1: {
    height: 40,
    width: 40,
  },
  line: {
    marginTop: 35,
    width: '85%',
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  textContainer: {
    marginHorizontal: 28,
    marginTop: 15,
    // marginBottom:3,
    height: 100,
    width: '100%',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    // justifyContent: 'center',
    // alignSelf: 'center',
    color: '#898989',
    fontWeight: 'normal',
  },
  line1: {
    // marginTop: 8,
    width: '85%',
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  main: {
    marginTop: 30,
  },
  textinput: {
    paddingLeft: 20,
    marginTop: 10,
    fontSize: 15,
    width: '100%',
    borderRadius: 20,
    paddingVertical: height(2),
    borderColor: AppColors.sementic9,
    borderWidth: 1,
  },
  iconContainer: {
    marginLeft: 80,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#FEF7F4',
    shadowColor: '#F4F3F3',
    borderRadius: 5,
    borderColor: '#FFBF00',
    shadowColor: 'black',
    shadowRadius: 5,
    elevation: 5,
  },
  textFields: {
    marginTop: 40,
    height: '50%',
    width: '100%',
  },
  postblog: {
    width: 211,
    height: 50,
    paddingVertical: 7,
    backgroundColor: '#FFBF00',
    borderRadius: 15,
    marginRight: 25,
    marginVertical: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    marginLeft: width(5),
    marginTop: height(2),
  },
  sendReview: {
    backgroundColor: AppColors.primary,
    height: height(6),
    width: width(35),
    alignSelf: 'center',
    borderRadius: width(3),
    marginTop: height(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewTxt: {
    color: AppColors.white,
    fontSize: width(4),
  },
});
