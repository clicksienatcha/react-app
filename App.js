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


  state = {
    counter:0,
    loading: true
  }

  

  constructor(props) {
    super(props);

    // this.state = {
    //   loading: true
    // };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  increase(){
    let newvalue = this.state.counter = this.state.counter + 1;
    console.log('เพิ่ม + ',newvalue);
  
    this.setState({
      counter:newvalue
    })
  
  }

  decrease(){
    let newvalue = this.state.counter = this.state.counter - 1;
    console.log('ลด - ',newvalue);
    this.setState({
      counter:newvalue
    })
  }


  render() {

    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (

      <Container>
        <Header>
          <Body>
            <Title>counter</Title>

          </Body>
        </Header>

        <Content >
          <View style={styles.body}>
            <Button block info onPress={()=>{this.increase()}}>
              <Text>เพิ่ม</Text>
            </Button>

            <Button style={styles.button} block danger onPress={()=>{this.decrease()}}>
              <Text>ลด</Text>
            </Button>
            <WarningText caption={this.state.counter}></WarningText>
          </View>

        </Content>


      </Container>

      

    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
  },
  button:{
    marginTop:10,
  }

})
