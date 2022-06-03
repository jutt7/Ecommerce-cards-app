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
  imageContainer: {
    height: height(10),
    alignSelf: 'center',
    marginTop: height(7),
  },
  txt1: {
    fontSize: width(7.5),
    fontWeight: '500',
    marginTop: height(10),
    color: AppColors.black,
  },
  loginTxt: {
    color: AppColors.white,
    fontSize: width(5),
  },
  inputContainer: {
    paddingVertical: height(2),
    paddingHorizontal: width(3),
    borderRadius: width(2),
    color: AppColors.black,
    borderColor: AppColors.sementic1,
    borderWidth: 1,
    marginTop: height(3),
  },
  loginContainer: {
    backgroundColor: AppColors.primary,
    paddingVertical: height(2),
    borderRadius: width(3.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(6),
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(2),
  },
  line: {
    backgroundColor: AppColors.sementic1,
    height: height(0.12),
    width: width(25),
    marginBottom: height(2),
  },
  orTxt: {
    marginHorizontal: width(4),
    fontWeight: '700',
    marginBottom: height(2),
  },
  container: {
    borderWidth: 1,
    borderColor: AppColors.sementic1,
    paddingVertical: height(1.2),
    borderRadius: width(3.2),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height(1.2),
  },
  imageContainer1: {
    height: height(4),
    marginLeft: width(10),
    marginRight: width(5),
  },
  txt2: {
    fontWeight: '500',
  },
  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(2),
  },
  signUpTxt: {
    color: AppColors.black,
    fontWeight: 'bold',
    marginLeft: width(1),
  },
});
export default styles;
