import React from 'react'
import {View,Text,TextInput} from  'react-native'


class InputForm extends React.Component{
    render(){
        return (
            <View>
                <Text style={{fontSize: 10}}>
                    input Form 

                </Text>
                <TextInput placeholder={"Enter Your Name"}></TextInput>
            </View>
        )
    }
}

export default InputForm