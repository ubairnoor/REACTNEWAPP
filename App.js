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
 <View>
   <Text style={[styles.red,styles.fonts]}>Hello React Native</Text>
   <Login/>
   <Home data = {data} />
   <HomeState/>
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
