import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import WORDS from '../common/word-list.json';

const GameScreen = () => {
  const [answer, setAnswer] = useState(
    WORDS[Math.floor(WORDS.length * Math.random())],
  );
  const [words, setWords] = useState({
    current: 0,
    words: new Array(6).fill(
      new Array(5).fill({
        letter: 'c',
        // score indicates whether the letter exists in the answer word.
        // If score == 0, letter is not in the word.
        // If score == 1, letter is in the word but at a wrong place.
        // If score == 2, letter is at the correct place in the word.
        score: 0,
      }),
    ),
  });
  console.log({words, answer});
  return (
    <View>
      {words.words.map((row: any[5]) => (
        <View style={styles.row}>
          {row.map((letter: any) => (
            <View style={styles.box}>
              <Text style={styles.letterText}>{letter.letter}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default GameScreen;
