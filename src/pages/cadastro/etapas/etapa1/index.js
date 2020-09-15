import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function Etapa1(){

    return (
        <View>
            <Text>
                Informações Pessoais
            </Text>
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