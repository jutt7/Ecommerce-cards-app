import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    // backgroundColor: AppColors.white1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    height: height(4),
    width: width(10),
  },
  logoContainer: {
    height: height(4.5),
    width: width(12),
    marginLeft: width(30),
  },
  logoTxt: {
    fontSize: width(6),
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: width(23),
    color: AppColors.primary,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(15),
    position: 'absolute',
    right: width(1),
  },
});
export default styles;
