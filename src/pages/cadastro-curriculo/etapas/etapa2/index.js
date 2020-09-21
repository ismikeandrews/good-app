import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

export default function Etapa2(){

    return (
        <View style={ styles.content }>
            <Text style={ variables.title }>Informações da Conta</Text>
            <Text style={ variables.subtitle }>Agora vamos configurar a sua conta</Text>

            <Text style={ variables.label }>Login</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Senha</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Confirmar senha</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
        </View>
    )
}