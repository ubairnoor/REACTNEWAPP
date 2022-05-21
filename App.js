/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Login from './components/Login'
import Home from './components/Home';
import HomeState from './components/HomeState';
import InputForm from './components/InputForm';
import FlexBox from './components/FlexBox';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const data = "Email id"


  return (
 <View style={{flex:1, flexDirection:'column',alignItems:'center'}}>
 <View style={{flex:1,width:100,backgroundColor:'yellow'}}></View>
 <View style={{flex:1,width:100,backgroundColor:'red'}}></View>
 <View style={{flex:2,width:100,backgroundColor:'green'}}></View>


 {/* <Text style={[styles.red,styles.fonts]}>Hello React Native</Text>
   <Text style={[styles.fonts]}>Hello React Native</Text>
   <Text></Text>
   <FlexBox/>
   <Login/>
   <Home data = {data} />
   <HomeState/>
   <InputForm/> */}


   
 </View>
  );
};

const styles = StyleSheet.create({
  red:{
   
    color:'red',
   
  },
  fonts:{
    fontSize:30,
    fontWeight:'bold'
  }
}
)
export default App;
