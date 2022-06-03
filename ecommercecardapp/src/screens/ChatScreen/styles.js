import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import App from '../../../App';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  topContainer: {
    backgroundColor: AppColors.primary,
    height: height(22),
    // width: width(100),
    borderRadius: width(10),
    paddingTop: height(6),
    paddingHorizontal: width(4),
    zIndex: 1,
  },
  nameTxt: {
    fontSize: width(7),
    color: AppColors.white,
    alignSelf: 'center',
    marginTop: height(2),
  },
  innerContainer: {
    backgroundColor: AppColors.sementic7,
    // backgroundColor: 'pink',
    height: height(65),
    marginHorizontal: width(2),
    marginTop: -height(2),
  },
  img: {
    alignSelf: 'center',
    marginTop: height(4.5),
  },
  msgType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width(2),
    marginTop: height(2),
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: AppColors.sementic7,
    borderColor: AppColors.sementic9,
    borderWidth: 1,

    height: height(5.3),
    width: width(80),
    borderRadius: width(4),
    paddingHorizontal: width(4),
  },
  sentContainer: {
    height: height(6),
    width: height(6),
    borderRadius: height(100),
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
