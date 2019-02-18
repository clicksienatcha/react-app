import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input
} from "native-base"; 

export default class WarningText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.box}> {this.props.caption} </Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    redFont:{
        color:'red',
    },
    box:{
        color:'#ddd',
        padding:20,
        backgroundColor:'green',
        marginTop:10,
    }
})
