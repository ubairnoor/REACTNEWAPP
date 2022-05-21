import React from 'react'
import {View,Text,TextInput,Button} from  'react-native'


class InputForm extends React.Component{
    //TO Get Value from Input Field we have to Use State
    constructor(){
        super(); 
        this.state={
            name:"hello"
        }
    }
    render(){
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    {this.state.name}

                </Text>
                <TextInput placeholder={"Enter Your Name"} 
                onChangeText={(e)=>{this.setState({name:e})}} ></TextInput>
                <Button title="submit" onPress={()=>{alert(this.state.name)}}></Button>
            </View>
        )
    }
}

export default InputForm