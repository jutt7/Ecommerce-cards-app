import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    // backgroundColor: AppColors.white1,
    marginHorizontal: width(4),
    marginTop: height(1),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    height: height(4.5),
    width: width(12),
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: AppColors.sementic1,
    paddingVertical: height(1.2),
    paddingHorizontal: width(4),
    borderRadius: width(3.2),
    flexDirection: 'row',
    alignItems: 'center',
    width: width(78),
  },
  txt1: {
    color: AppColors.black,
    marginLeft: width(2),
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(5.5),
    justifyContent: 'space-between',
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
  txt2: {
    color: AppColors.white,
    fontSize: width(4),
    paddingVertical: height(2),
  },
});
export default styles;
