import {StyleSheet} from 'react-native';
import {palette, screenWidth} from '../../common';

export default StyleSheet.create({
  container: {
    marginHorizontal: '3%',
    alignItems: 'center',
    marginBottom: '3%',
  },
  row: {
    flexDirection: 'row',
  },
  key: {
    backgroundColor: palette.secondaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: palette.primaryBorder,
    minWidth: screenWidth / 12,
    height: screenWidth / 7,
    paddingHorizontal: '2%',
    marginHorizontal: 1,
    marginBottom: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: palette.primaryBg,
    fontFamily: 'Rubik-Regular',
  },
});
