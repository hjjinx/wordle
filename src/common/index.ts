import {Dimensions} from 'react-native';

export const palette = {
  primaryBg: '#000',
  primaryBorder: '#ccc',
  primaryText: '#fff',
  secondaryBg: '#f2efe2',
  green: 'green',
  yellow: 'yellow',
};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const initialKeyboardLayout = [
  [
    {letter: 'Q', score: 0},
    {letter: 'W', score: 0},
    {letter: 'E', score: 0},
    {letter: 'R', score: 0},
    {letter: 'T', score: 0},
    {letter: 'Y', score: 0},
    {letter: 'U', score: 0},
    {letter: 'I', score: 0},
    {letter: 'O', score: 0},
    {letter: 'P', score: 0},
  ],
  [
    {letter: 'A', score: 0},
    {letter: 'S', score: 0},
    {letter: 'D', score: 0},
    {letter: 'F', score: 0},
    {letter: 'G', score: 0},
    {letter: 'H', score: 0},
    {letter: 'J', score: 0},
    {letter: 'K', score: 0},
    {letter: 'L', score: 0},
  ],
  [
    {letter: 'Back', score: 0},
    {letter: 'Z', score: 0},
    {letter: 'X', score: 0},
    {letter: 'C', score: 0},
    {letter: 'V', score: 0},
    {letter: 'B', score: 0},
    {letter: 'N', score: 0},
    {letter: 'M', score: 0},
    {letter: 'Enter', score: 0},
  ],
];
