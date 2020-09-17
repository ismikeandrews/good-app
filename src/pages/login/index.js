import React, {Component} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

class Login extends Component{
    
    async login(){
        console.log("Login")
    }
    
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.logo }>
                    <Image style={ styles.logoImg } source={require('../../assets/images/ijc.png')} />
                </View>

                <Text style={ styles.title }>Seja bem-vindo!</Text>
                <Text style={ styles.subtitle }>Faça login para acessar a plataforma</Text>
            
                <Text style={ styles.label }>Login</Text>
                <TextInput style={ styles.input } placeholder = 'Digite seu login'
                onChangeText={ text => onChangeText(text) }/> 
                
                <Text style={ styles.label }>Senha</Text>
                <TextInput style={ styles.input } placeholder='Digite sua senha'
                onChangeText={text => onChangeText(text)}/>
                
                <TouchableOpacity style={[ styles.btn, styles.btnEntrar ]}
                onPress={() => this.login()}>
                    <Text style={[ styles.btnText, styles.btnTextEntrar ]}>Entrar</Text>
                </TouchableOpacity>
                
                <View style={ styles.contentBtn }>
                    <TouchableOpacity style={[ styles.btn, styles.btns, styles.btnCadastro ]}
                    onPress={() => this.props.navigation.navigate('Cadastro')}>
                        <Text style={[ styles.btnText, styles.btnTextCadastro ]}>Cadastro</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[ styles.btn, styles.btns, styles.btnCodigo ]}
                    onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
                        <Text style={[ styles.btnText, styles.btnTextCodigo ]}>Código de cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    }
    
    export { Login }