import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'; // 0.18.5

export default class Banner extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <Text>{this.props.headline}</Text>
        <Text>{this.props.description}</Text>
      </Card> 
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 24,
  }
});