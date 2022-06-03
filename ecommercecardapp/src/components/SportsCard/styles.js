import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(29),
    width: width(44),
    backgroundColor: AppColors.white2,
    borderRadius: width(6),
    marginVertical: height(2),
    elevation: 5,
  },
  imgContainer: {
    height: height(18),
    width: width(32),
    alignSelf: 'center',
    marginTop: height(2),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-evenly',
    marginHorizontal: width(2),
    marginTop: height(2),
  },
  cartContainer: {
    backgroundColor: AppColors.primary,
    paddingVertical: height(0.7),
    paddingHorizontal: width(1.6),
    borderRadius: width(1.6),
  },
  txt1: {
    color: AppColors.white,
    fontSize: width(2),
  },
  txt2: {
    color: AppColors.primary2,
    marginHorizontal: width(4.2),
  },
  heartContainer: {
    backgroundColor: AppColors.white,
    height: height(2.6),
    width: height(2.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(100),
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
export default styles;
