import React, {Component} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Menu } from '../../shared/'

import variables from '../../shared/variables/styles'
import styles from './styles'

class Curriculo extends Component{
    render(){
        return(
            <View style={[ variables.container, styles.container ]}>
                <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />

                <Text style={ styles.text }>Cadastre um currículo para continuar</Text>

                <TouchableOpacity style={[ variables.btn, styles.btn ]}>
                    <Text style={[ variables.btnText, styles.btnText ]}>Cadastrar</Text>
                </TouchableOpacity>
                
                <Menu/>
            </View>
        )
    }
}

export { Curriculo }