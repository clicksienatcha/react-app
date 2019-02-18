import React from 'react';
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
import WarningText from './components/warning.text';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  

  render() {

    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container >
        <Header>
          <Body>
            <Title>My App</Title>
          </Body>
        </Header>
        <Content style={styles.body}>
          <Text>Hello</Text>
          <WarningText caption='กรุณากรอกข้อมูล'></WarningText>

          <WarningText caption='กรุณากรอก Email'></WarningText>
          <WarningText caption='กรุณากรอก'></WarningText>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    padding:10,
  }
})
