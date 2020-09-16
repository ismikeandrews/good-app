import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import styles from './styles'

class Login extends Component{
    
    async login(){
        console.log("Login")
    }
    
    render(){
        return(
            <View style = { styles.container }>
                <Text style = { styles.title }>Seja bem-vindo!</Text>
                <Text style = { styles.subtitle }>Faça login para acessar a plataforma</Text>
            
                <Text style = { styles.label }>Login</Text>
                <TextInput style = { styles.input } placeholder = 'Digite seu login'
                onChangeText = { text => onChangeText(text) }/> 
                
                <Text style = { styles.label }>Senha</Text>
                <TextInput style = { styles.input } placeholder = 'Digite sua senha'
                onChangeText = {text => onChangeText(text)}/>
                
                <Button style = { styles.btnEntrar } title = "Entrar"
                onPress = {() => this.login()}/>
                
                <Button style = { styles.btn } title = "Cadastro"
                onPress = {() => this.props.navigation.navigate('Cadastro')}/>
                
                <Button style = { styles.btn } title = "Código de cadastro"
                onPress = {() => this.props.navigation.navigate('CadastroCurriculo')}/>
            </View>
            )
        }
    }
    
    export { Login }