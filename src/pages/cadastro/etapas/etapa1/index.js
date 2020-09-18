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

            <Text>Nome Completo</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/> 
            <Text>Data de Nascimento</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/> 
            <Text>Email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/>                 
        </View>
    )
}