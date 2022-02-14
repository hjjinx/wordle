import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import WORDS from '../../common/word-list.json';
import KeyBoard from '../KeyBoard';
import {palette} from '../../common';

const GameScreen = () => {
  const [answer, setAnswer] = useState(
    WORDS[Math.floor(WORDS.length * Math.random())],
  );
  const [words, setWords] = useState(
    new Array(6).fill(
      new Array(5).fill({
        letter: '',
        // score indicates whether the letter exists in the answer word.
        // If score == 0, letter is not in the word.
        // If score == 1, letter is in the word but at a wrong place.
        // If score == 2, letter is at the correct place in the word.
        score: 0,
      }),
    ),
  );
  const [currentLetter, setCurrentLetter] = useState([0, 0]);
  const [isGameOver, setIsGameOver] = useState(false);

  const onEnterLetter = (letter: any) => {
    if (isGameOver) return;
    if (letter === 'Enter' && currentLetter[1] == 5) {
      const word: string = words[currentLetter[0]].reduce(
        (acc: string, curr: {letter: string}) =>
          acc + curr.letter.toLowerCase(),
        '',
      );
      if (WORDS.indexOf(word.toLowerCase()) == -1) {
        Alert.alert('Not a valid word!');
        return;
      }
      let answerTemp = answer;
      let wordTemp: any[] = word.split('').map((char: string) => ({
        letter: char,
        isUsed: false,
      }));
      const scoreArr = [0, 0, 0, 0, 0];
      for (let index in wordTemp) {
        let letter = wordTemp[index];
        if (answerTemp[index] == letter.letter) {
          scoreArr[index] = 2;
          letter.isUsed = true;
          answerTemp = answerTemp.replace(letter.letter, '-');
        }
      }
      for (let index in wordTemp) {
        let letter = wordTemp[index];
        if (letter.isUsed) continue;
        if (answerTemp.indexOf(letter.letter) != -1) {
          scoreArr[index] = 1;
          letter.isUsed = true;
          answerTemp = answerTemp.replace(letter.letter, '-');
        }
      }
      setWords(
        words.map((i, index1) =>
          index1 == currentLetter[0]
            ? i.map((j: any, index2: number) => ({
                ...j,
                score: scoreArr[index2],
              }))
            : i,
        ),
      );
      if (scoreArr.find(i => i != 2) == undefined) {
        Alert.alert('You win!');
        setIsGameOver(true);
        return;
      }
      if (currentLetter[0] < 5) setCurrentLetter([currentLetter[0] + 1, 0]);
      else {
        Alert.alert('You lost!');
        setIsGameOver(true);
      }
    } else if (letter == 'Back' && currentLetter[1] > 0) {
      setWords(
        words.map((i, index1) =>
          index1 == currentLetter[0]
            ? i.map((j: any, index2: number) =>
                index2 == currentLetter[1] - 1 ? {letter: '', score: 0} : j,
              )
            : i,
        ),
      );
      setCurrentLetter([currentLetter[0], currentLetter[1] - 1]);
    } else if (currentLetter[1] < 5 && letter.length == 1) {
      setWords(
        words.map((i, index1) =>
          index1 == currentLetter[0]
            ? i.map((j: any, index2: number) =>
                index2 == currentLetter[1] ? {letter, score: 0} : j,
              )
            : i,
        ),
      );
      setCurrentLetter([currentLetter[0], currentLetter[1] + 1]);
    }
  };

  const onPressStartNewGame = () => {
    setAnswer(WORDS[Math.floor(WORDS.length * Math.random())]);
    setWords(
      new Array(6).fill(
        new Array(5).fill({
          letter: '',
          score: 0,
        }),
      ),
    );
    setCurrentLetter([0, 0]);
    setIsGameOver(false);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          padding: 15,
          alignSelf: 'center',
          backgroundColor: palette.secondaryBg,
          borderRadius: 100,
          width: '80%',
          marginBottom: 20,
        }}
        onPress={onPressStartNewGame}>
        <Text style={{color: palette.primaryBg, textAlign: 'center'}}>
          New Game
        </Text>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        {words.map((row: any[5]) => (
          <View style={styles.row}>
            {row.map((letter: any) => (
              <View
                style={[
                  styles.box,
                  {
                    backgroundColor:
                      letter.score == 2
                        ? 'green'
                        : letter.score == 1
                        ? 'yellow'
                        : palette.primaryBg,
                  },
                ]}>
                <Text
                  style={[
                    styles.letterText,
                    letter.score == 1 && {color: palette.primaryBg},
                  ]}>
                  {letter.letter}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <KeyBoard onEnterLetter={onEnterLetter} />
    </View>
  );
};

export default GameScreen;
