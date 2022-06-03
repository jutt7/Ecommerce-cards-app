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
  searchContainer: {
    borderWidth: 1,
    borderColor: AppColors.sementic1,
    paddingVertical: height(1.2),
    paddingHorizontal: width(4),
    borderRadius: width(3.2),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height(1.2),
    marginTop: height(5),
  },
  txt1: {
    color: AppColors.black,
    marginLeft: width(2),
  },
  txt2: {
    fontSize: width(3.5),
    fontWeight: '600',
    marginTop: height(3),
  },
  categoryContainer: {
    height: height(8),
    width: height(8),
    borderColor: AppColors.sementic1,
    borderWidth: 1,
    borderRadius: width(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    alignItems: 'center',
  },
  categoryTxt: {
    color: AppColors.sementic3,
    marginTop: height(1),
    fontSize: width(3),
    fontWeight: '600',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    height: height(54),
    marginTop: height(4),
  },
});
export default styles;
