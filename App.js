import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'react-moment';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
    
  }

  render() {
    let now = new Date();

    return (
      <View style={styles.container}>
        <Moment element={Text} format="dddd">{now}</Moment>
        <Moment element={Text} format='MMMM Do YYYY'>{now}</Moment>
        <Text>Today at a Glance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: -80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
