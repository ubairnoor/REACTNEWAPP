import React from 'react'
import {View, Text,Button} from 'react-native';

class  HomeState extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:"Some App Data"
        }
    }
    changeState(){
        this.setState({data:"Data Changed"});
    }
  render(){
    return (
        <View>
            <Text>{this.state.data}</Text>
            <Button title="Press me" onPress={()=>{this.changeState()}}/>
        </View>
    )
  }
}
export default HomeState