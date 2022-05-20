import React from 'react';
import { View,Text ,Button} from 'react-native';

const Login = () =>{
    function loginCall(){
        alert("hello this is Alert")
    }
    return(
        <View>
            <Text>Login screen is here </Text>
            <Button title="Login" onPress={loginCall}>Log In</Button>
        </View>
    )
}
export default Login