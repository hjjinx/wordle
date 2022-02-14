import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const keyboardLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Back', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'],
];

type KeyBoardProps = {
  onEnterLetter: (input: string) => void;
};

const KeyBoard = (props: KeyBoardProps) => {
  const {onEnterLetter} = props;

  return (
    <View style={styles.container}>
      {keyboardLayout.map(row => (
        <View style={styles.row}>
          {row.map(letter => (
            <TouchableOpacity
              style={[styles.key]}
              activeOpacity={0.9}
              onPress={() => onEnterLetter(letter)}>
              <Text style={styles.text}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default KeyBoard;
