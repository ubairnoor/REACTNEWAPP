/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import Login from './components/Login'
import Home from './components/Home';
import HomeState from './components/HomeState';
import InputForm from './components/InputForm';
import FlexBox from './components/FlexBox';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = (props) => {
  const data = "Email id"


  return (
    //we face error in design the boxes in Right Direction
    // we will add FlexWrap property so that we can put the last box in below.
    //Justify Content is another prop which we will help to justify the content center ,space between,space evenly
    <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-start' }}>

      <Text style={{ fontSize: 90 }}>Home Screen </Text>
      <Button title='Profile' onPress={()=>{props.navigation.navigate("Myprofile")}}/>
      <Button title='About' onPress={()=>{props.navigation.navigate("About")}}/>



    </View>
  );
};

const styles = StyleSheet.create({
  red: {

    color: 'red',

  },
  fonts: {
    fontSize: 30,
    fontWeight: 'bold'
  }
}
)

function Profile(props) {
  console.log(props)
  return (
    <View>
    <Text style={{ fontSize: 90 }}>Profile Screen </Text>

       <Button title='Home' onPress={()=>{props.navigation.navigate("Home")}}/>
    </View>
    
  )
}

function About (props){
  return (
    <View>
      <Text style={{fontSize: 80}}> About Us</Text>
      <Button title='Profile' onPress={()=>{props.navigation.navigate("Myprofile")}}/>
    </View>
  )
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Myprofile: {
    screen: Profile
  },
  About:{
    screen:About
  }
})

export default createAppContainer(AppNavigator);
