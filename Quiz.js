import React, { Component } from 'react';
import { Text,  Image } from 'react-native';
import { Video } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

export default class Quiz extends Component {
  render(){
    var picture = null
    var vdo = null
    
    if (this.props.data.picture != null && this.props.data.picture != "")
      picture = <Image
          source={{ uri: this.props.data.picture }}
          style={{ height: 140, width: 200 }}
        />
        
    if( this.props.data.vdo != null && this.props.data.vdo != "")
      vdo = <Video
          source={{ uri: this.props.data.vdo }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          shouldPlay={false}
          useNativeControls={true}
          isLooping
          style={{ width: 300, height: 300 }}
        />
        
    return(
      <Card>
        <Text>{this.props.data.question}</Text>
        {picture}
        {vdo}
        <Text>{this.props.data.choice[0]}</Text>
        <Text>{this.props.data.choice[1]}</Text>
        <Text>{this.props.data.choice[2]}</Text>
        <Text>{this.props.data.choice[3]}</Text>
      </Card>
      )
  }
}