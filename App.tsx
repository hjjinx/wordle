/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {palette} from './src/common';
import GameScreen from './src/Game/Game';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <GameScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.primaryBg,
    paddingTop: 20,
  },
});

export default App;
