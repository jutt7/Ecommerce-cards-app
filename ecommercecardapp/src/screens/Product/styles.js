import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    // backgroundColor: AppColors.white1,
    // marginHorizontal: width(4),
  },
  imgContainer: {
    height: height(60),
    width: width(100),
    // backgroundColor: 'pink',
  },
  innerContainer: {
    backgroundColor: AppColors.white,
    height: height(40),
    width: width(100),
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: width(10),
    borderTopLeftRadius: width(10),
    elevation: 5,
    paddingHorizontal: width(4),
  },
  // abolute: {
  //   position: 'absolute',
  //   bottom: 0,
  // },
  doubleHeight: {
    height: height(70),
  },
  backButton: {
    height: height(6),
    width: height(6),
    borderRadius: height(100),
    backgroundColor: AppColors.white,
    position: 'absolute',
    top: height(6),
    left: width(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    height: height(5),
    width: height(5),
    borderRadius: height(100),
    backgroundColor: AppColors.white3,
    position: 'absolute',
    top: height(36),
    left: width(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    height: height(5),
    width: height(5),
    borderRadius: height(100),
    backgroundColor: '#ffffff30',
    position: 'absolute',
    top: height(36),
    right: width(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartContainer: {
    height: height(6),
    width: height(6),
    borderRadius: height(100),
    backgroundColor: AppColors.white,
    position: 'absolute',
    top: height(6),
    right: width(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize: width(2.5),
    alignSelf: 'center',
  },
  bar: {
    backgroundColor: AppColors.primary2,
    height: height(0.8),
    width: width(20),
    alignSelf: 'center',
    marginTop: height(0.5),
    borderRadius: width(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  txt2: {
    fontSize: width(4.2),
    fontWeight: '600',
  },
  priceTxt: {
    color: AppColors.primary2,
    fontSize: width(4.5),
    fontWeight: '600',
  },
  txt3: {
    color: AppColors.sementic5,
    fontSize: width(3.2),
    marginTop: height(2),
  },
  varientContainer: {
    borderWidth: 2,
    borderColor: AppColors.sementic1,
    height: height(2),
    // width: width(15),
    borderRadius: width(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(2),
    marginHorizontal: width(0.7),

    // paddingVertical: height(1),
  },
  varientTxt: {
    fontSize: width(3),
    color: AppColors.sementic2,
    // paddingVertical: height(1),
    height: height(2),
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: width(25),
    justifyContent: 'space-between',
    marginTop: height(2),
    position: 'absolute',
    bottom: height(15),
  },
  container2: {
    height: height(3.2),
    width: height(3.2),
    borderRadius: height(100),
    borderWidth: 1.5,
    borderColor: AppColors.sementic6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payContainer: {
    backgroundColor: AppColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(3),
    width: width(70),
    alignSelf: 'center',
    position: 'absolute',
    bottom: height(8),
  },
  txt4: {
    color: AppColors.white,
    fontSize: width(4),
    paddingVertical: height(2),
  },
  addedContainer: {
    height: height(7),
    width: height(7),
    borderRadius: height(100),
    backgroundColor: AppColors.primary,
    alignSelf: 'center',
    position: 'absolute',
    bottom: height(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    backgroundColor: '#ffffff80',
    height: height(100),
    width: width(100),
    position: 'absolute',
    bottom: 0,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  halfWhite: {
    backgroundColor: 'pink',
    height: height(50),
  },
});
export default styles;