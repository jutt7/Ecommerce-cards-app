import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    // backgroundColor: AppColors.white1,
    marginHorizontal: width(4),
  },
  backButton: {
    marginTop: height(2),
  },
  txt1: {
    fontSize: width(5.5),
    fontWeight: '500',
    marginTop: height(3),
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(4),
  },
  imgContainer: {
    height: height(5),
    width: height(5),
    borderRadius: height(100),
  },
  txt2: {
    fontSize: width(3),
    marginLeft: width(2),

    width: width(70),
  },
  txt3: {
    fontSize: width(2),
    fontWeight: '500',
    color: AppColors.sementic5,
  },
});
export default styles;
