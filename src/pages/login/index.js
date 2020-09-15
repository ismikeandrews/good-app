import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import styles from './styles'

class Login extends Component{

    async login(){
        console.log("Login")
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Login</Text>
               <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/> 
                <Text>Senha</Text>
               <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/> 
                <Button
                title="Entrar"
                onPress={() => this.login()}/>
                <Button
                title="Cadastro"
                onPress={() => this.props.navigation.navigate('Cadastro')}/>
                <Button
                title="Código de cadastro"/>
            </View>
        )
    }
}

export { Login }