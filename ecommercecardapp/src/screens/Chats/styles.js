import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingHorizontal: width(4),
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(4),
    justifyContent: 'space-between',
    marginHorizontal: width(4),
  },
  txt1: {
    fontSize: width(6),
    fontWeight: '500',
  },
});
export default styles;
