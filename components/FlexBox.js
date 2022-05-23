import React from 'react';
import {View} from 'react-native';

class FlexBox extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'red'}}></View>
                <View style={{flex:1,backgroundColor:'green'}}></View>
        
            </View>
        )
    }
}

export default  FlexBox