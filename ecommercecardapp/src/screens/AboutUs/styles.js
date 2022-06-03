import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  callContainer: {
    height: height(4),
    width: height(4),
    borderRadius: height(100),
    backgroundColor: AppColors.white,
    borderColor: AppColors.black,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: width(4),
  },
  txt1: {
    fontSize: width(4.5),
    marginLeft: width(3),
    marginTop: height(3),
  },
  msgType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width(2),
    marginTop: height(2),
  },
  input: {
    backgroundColor: AppColors.sementic7,
    borderColor: AppColors.sementic9,
    borderWidth: 1,
    height: height(5.3),
    width: width(94),
    borderRadius: width(4),
    paddingHorizontal: width(4),
    alignSelf: 'center',
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
export default styles;
