import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor: 'white',
  },
  img: {
    height: height(30),
    width: width(70),
    // backgroundColor: 'pink',
  },
  dp: {
    height: height(10),
    width: height(10),
    borderRadius: height(100),
  },
  container: {
    position: 'absolute',
    top: height(12),
    left: width(4),
  },
  txt1: {
    fontSize: width(4),
    fontWeight: '600',
  },
  txt2: {
    color: AppColors.primary2,
    marginTop: height(0.5),
  },
});
export default styles;
