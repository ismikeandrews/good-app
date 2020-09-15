import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function Etapa3(){

    return (
        <View>
            <Text>
                Endereço
            </Text>
            <Text>Senha</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/> 
            <Text>Confirmar Senha</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}/> 
        </View>
    )
}