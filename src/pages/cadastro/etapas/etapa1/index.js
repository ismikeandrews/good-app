import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

export default function Etapa1(){

    return (
        <View style={ styles.content }>
            <Text style={ variables.title }>Informações pessoais</Text>
            <Text style={ variables.subtitle }>Precisamos de alguns dados básicos sobre você</Text>

            <View style={ styles.perfil }>
                <Image style={ styles.perfilImg } source={require('../../../../assets/images/ijc.png')} />
            </View>

            <Text style={ variables.label }>Nome completo</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Email</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Data de Nascimento</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
        </View>
    )
}