import React from 'react';
import { View,Text ,Button} from 'react-native';

const Login = () =>{
    return(
        <View>
            <Text>Login screen is here </Text>
            <Button title="Log in" onPress={()=>{alert("Hi This is ALert")}}/>
        </View>
    )
}
export default Login