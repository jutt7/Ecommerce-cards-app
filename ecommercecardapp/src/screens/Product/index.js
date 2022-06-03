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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Stars from 'react-native-stars';
export default function Product({navigation}) {
  const card1 = require('../../assets/images/card5.png');
  const card2 = require('../../assets/images/card6.png');
  const [count, setCount] = useState(2);
  const [img, setImg] = useState(card1);
  const [add, setAdd] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Image source={img} style={styles.imgContainer} resizeMode="stretch" />
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={width(6)}
          color={AppColors.sementic4}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} style={styles.heartContainer}>
        <AntDesign name="heart" size={width(6)} color={AppColors.red} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.left}
        onPress={() => setImg(card1)}>
        <AntDesign name="left" size={width(6)} color={AppColors.black} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.right}
        onPress={() => setImg(card2)}>
        <AntDesign
          style={{zIndex: 1}}
          name="right"
          size={width(6)}
          color={AppColors.black}
        />
      </TouchableOpacity>
      {/* <View
        // style={styles.outerContainer}
        style={showDetail ? styles.outerContainer : styles.halfWhite}> */}
      <View
        style={
          showDetail
            ? [styles.innerContainer, styles.doubleHeight]
            : [styles.innerContainer, styles.abolute]
        }
        // style={[styles.innerContainer, styles.doubleHeight]}
      >
        <TouchableOpacity
          style={{marginTop: height(1)}}
          onPress={() => setShowDetail(!showDetail)}>
          {!showDetail ? (
            <Text style={styles.txt1}>Press to see more details</Text>
          ) : (
            <Text style={styles.txt1}>Hide</Text>
          )}
          <View activeOpacity={0.6} style={styles.bar}></View>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.txt2}>Sport card of a legendary player</Text>
          <Text style={styles.priceTxt}>$200</Text>
        </View>
        <Text style={styles.priceTxt}>MIGUEL CABRERA</Text>
        <Text style={styles.txt3}>Available Varients</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: height(1.5),
          }}>
          {/* --------------- Varient --------------------- */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Varient brColor={AppColors.sementic1} />
            <Varient brColor={AppColors.sementic1} />
            <Varient brColor={AppColors.sementic1} />
            <Varient
              txtColor={AppColors.white}
              bg={AppColors.primary}
              brColor={AppColors.primary}
            />
            <Varient brColor={AppColors.sementic1} />
            <Varient brColor={AppColors.sementic1} />
          </ScrollView>
        </View>

        {/* --------------- Stats --------------------- */}
        {showDetail ? (
          <View>
            <Text style={{...styles.priceTxt, marginTop: height(2)}}>
              Product Details
            </Text>
            <View style={{marginTop: height(3)}}>
              <Stats txt={'Centering'} />
              <Stats txt={'Cornering'} />
              <Stats txt={'Edges'} />
              <Stats txt={'Creases'} />
              <Stats txt={'Surface'} />
            </View>
          </View>
        ) : null}
        {/* --------------- Quantit --------------------- */}
        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.container2}
            onPress={() => setCount(count + 1)}>
            <AntDesign name="plus" size={width(4)} color={AppColors.black} />
          </TouchableOpacity>
          <Text style={styles.txt2}>{count}</Text>
          <TouchableOpacity
            style={styles.container2}
            onPress={() => setCount(count - 1)}>
            <AntDesign name="minus" size={width(4)} color={AppColors.black} />
          </TouchableOpacity>
        </View>
        {!add ? (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.payContainer}
            onPress={() => setAdd(true)}>
            <Text style={styles.txt4}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.addedContainer}>
            <AntDesign name="check" size={height(4)} color={AppColors.white} />
          </View>
        )}
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const Varient = ({txtColor, bg, brColor}) => {
  return (
    <View
      style={{
        ...styles.varientContainer,
        backgroundColor: bg,
        borderColor: brColor,
      }}>
      <Text style={{...styles.varientTxt, color: txtColor}}>Varient</Text>
    </View>
  );
};

const Stats = ({txt}) => {
  return (
    <View style={styles.statsContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          width: width(30),
        }}>
        <Entypo name="dot-single" size={width(6)} color={AppColors.sementic2} />
        <Text style={{color: AppColors.sementic2}}>{txt}</Text>
      </View>
      <View style={{marginLeft: width(10)}}>
        <Stars
          default={4}
          count={5}
          spacing={8}
          half={true}
          starSize={50}
          fullStar={<FontAwesome name={'star'} size={width(3.7)} />}
          emptyStar={<FontAwesome name={'star-o'} size={width(3.7)} />}
          halfStar={<FontAwesome name={'star-half-empty'} size={width(4)} />}
        />
      </View>
    </View>
  );
};
