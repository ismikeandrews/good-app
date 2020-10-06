import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Menu } from '../../shared/'

import variables from '../../shared/variables/styles'
import styles from './styles'

class Vagas extends Component{
    render(){
        return(
            <View style={[ variables.container, styles.container, styles.empty ]}>
                <Text style={ styles.text }>
                    Nenhuma vaga encontrada no momento T_T
                </Text>

                <TouchableOpacity style={[ variables.btn, styles.btn ]}
                onPress={() => console.log('click')}>
                    <Text style={[ variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                </TouchableOpacity>
                <Menu/>
            </View>

            // <View style={[ variables.container, styles.container, styles.view ]}>
            //     <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />

            //     <Text style={ styles.text }>Cadastre um currículo para continuar</Text>

            //     <TouchableOpacity style={[ variables.btn, styles.btn ]}
            //     onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
            //         <Text style={[ variables.btnText, styles.btnText ]}>Cadastrar</Text>
            //     </TouchableOpacity>
                
            //     <Menu/>
            // </View>
        )
    }
}

export { Vagas }