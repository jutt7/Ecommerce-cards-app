import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(10),
    backgroundColor: AppColors.white2,
    borderRadius: width(6),
    marginVertical: height(2),
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  outer: {
    borderColor: AppColors.black,
    borderWidth: 1,
    height: height(2),
    width: height(2),
    borderRadius: height(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: AppColors.primary2,
    height: height(1.6),
    width: height(1.6),
    borderRadius: height(100),
  },
  imgContainer: {
    height: height(8),
    width: width(8),
  },
  priceTxt: {
    color: AppColors.primary2,
    fontSize: width(3),
  },
  descTxt: {
    color: AppColors.black,
    fontSize: width(3),
  },
  detailContainer: {
    height: height(6.5),
    justifyContent: 'space-between',
  },
  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height(7.5),
  },
  container1: {
    backgroundColor: AppColors.primary2,
    height: height(2),
    width: height(2),
    borderRadius: height(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize: width(4.5),
  },
});
export default styles;
