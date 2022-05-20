import React from 'react'
import {View, Text} from 'react-native';

class  HomeState extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:"Some App Data"
        }
    }
  render(){
    return (
        <View>
            <Text>{this.state.data}</Text>
        </View>
    )
  }
}
export default HomeState