import {StyleSheet} from 'react-native';
import {palette, screenWidth} from '../../common';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: palette.primaryBg,
    width: '100%',
    height: 100,
  },
  row: {
    marginHorizontal: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    width: screenWidth / 8,
    height: screenWidth / 8,
    borderWidth: 1,
    borderColor: palette.primaryBorder,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  letterText: {
    fontSize: 18,
    color: palette.primaryText,
    textTransform: 'uppercase',
    fontFamily: 'Rubik-Regular',
  },
  button: {
    padding: 15,
    alignSelf: 'center',
    backgroundColor: palette.secondaryBg,
    borderRadius: 100,
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: palette.primaryBg,
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
