import React, { Component } from 'react';
import { StyleSheet,ScrollView } from 'react-native';

import Quiz from './Quiz'
export default class QuizList extends Component {
  render() {
    var quizlist = []
    
    for (var i=0; i < this.props.quizes.length; i++) {
        quizlist.push(<Quiz key={i} data={this.props.quizes[i]}></Quiz>)
    } 
    
    return (
      <ScrollView styles={styles.scrollView}>
          {quizlist}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    flex: 1,
    justifyContent:'stretch'
  }
});