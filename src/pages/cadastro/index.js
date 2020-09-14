import React, {Component} from 'react';
import { View, Text, TextInput, Button } from 'react-native'


class Cadastro extends Component{

    async login(){
        console.log("Login")
    }

    render(){
        return(
            <View>
                <Text>Cadastro</Text>
            </View>
        )
    }
}

export { Cadastro }