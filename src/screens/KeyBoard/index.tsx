import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {palette} from '../../common';
import styles from './styles';

type KeyBoardProps = {
  onEnterLetter: (input: string) => void;
  keyboardLayout: any[];
};

const KeyBoard = (props: KeyBoardProps) => {
  const {onEnterLetter, keyboardLayout} = props;
  return (
    <View style={styles.container}>
      {keyboardLayout.map(row => (
        <View style={styles.row}>
          {row.map((letter: any) => (
            <TouchableOpacity
              style={[
                styles.key,
                {
                  backgroundColor:
                    letter.score === 1
                      ? palette.yellow
                      : letter.score === 1
                      ? palette.green
                      : letter.score === 0
                      ? palette.secondaryBg
                      : palette.primaryBgLight,
                },
              ]}
              activeOpacity={0.9}
              onPress={() => onEnterLetter(letter.letter)}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      letter.score === 2 || letter.score === -1
                        ? palette.primaryText
                        : palette.primaryBg,
                  },
                ]}>
                {letter.letter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default KeyBoard;
