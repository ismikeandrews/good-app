import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import styles from './styles'

export default function Etapa1(){

    return (
        <View>
            <Text style={ styles.title }>Informações pessoais</Text>
            <Text style={ styles.subtitle }>Precisamos de alguns dados básicos sobre você</Text>

            <View style={ styles.perfil }>
                <Image style={ styles.perfilImg } source={require('../../../../assets/images/ijc.png')} />
            </View>

            <Text style={ styles.label }>Nome completo</Text>
            <TextInput style={ styles.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ styles.label }>Email</Text>
            <TextInput style={ styles.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ styles.label }>Data de Nascimento</Text>
            <TextInput style={ styles.input } onChangeText={ text => onChangeText(text) }/>
        </View>
    )
}