import {StyleSheet} from 'react-native';
import {palette, screenWidth} from '../common';

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
  },
  letterText: {
    fontSize: 18,
    color: palette.primaryText,
    textTransform: 'uppercase',
  },
});
