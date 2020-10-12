import React, {Component} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'

import variables from '../../shared/variables/styles'
import styles from './styles'

class Login extends Component{
    
    async login(){
        console.log("Login")
    }
    
    render(){
        return(
            <View style={ variables.container }>
                <View style={ styles.logo }>
                    <Image style={ styles.logoImg } source={require('../../assets/images/ijc.png')} />
                </View>

                <Text style={ variables.title }>Seja bem-vindo!</Text>
                <Text style={ variables.subtitle }>Faça login para acessar a plataforma</Text>
            
                <Text style={[ variables.label, styles.label ]}>Login</Text>
                <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                
                <Text style={[ variables.label, styles.label ]}>Senha</Text>
                <TextInput style={ variables.input } onChangeText={text => onChangeText(text)}/>
                
                <TouchableOpacity style={ styles.btnLink }
                onPress={() => this.props.navigation.navigate('Cadastro')}>
                    <Text style={ styles.link }>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[ variables.btn, styles.btn, styles.btnEntrar ]}
                // onPress={() => this.login()}>
                onPress={() => this.props.navigation.navigate('Perfil')}>
                    <Text style={[ variables.btnText, styles.btnTextEntrar ]}>Entrar</Text>
                </TouchableOpacity>
                
                <View style={ variables.contentBtn }>
                    <TouchableOpacity style={[ variables.btn, styles.btn, styles.btns, styles.btnCadastro ]}
                    onPress={() => this.props.navigation.navigate('Cadastro')}>
                        <Text style={[ variables.btnText, styles.btnTextCadastro ]}>Cadastre-se</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[ variables.btn, styles.btn, styles.btns, styles.btnCodigo ]}
                    onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
                        <Text style={[ variables.btnText, styles.btnTextCodigo ]}>Código de cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    }
    
    export { Login }