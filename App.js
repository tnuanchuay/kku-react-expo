import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Banner from './Banner'
import QuizList from './QuizList'
import data from './Data.json'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Banner headline="Banner" description="Lower"></Banner>
        <QuizList quizes={data.quiz} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'stretch',
    width: "100%",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
