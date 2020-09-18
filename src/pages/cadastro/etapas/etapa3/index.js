import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

export default function Etapa3(){

    return (
        <View style={ variables.content }>
            <Text style={[ variables.title, styles.title ]}>Endereço</Text>

            <Text style={ variables.label }>CEP</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Logradouro</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ variables.label }>Cidade</Text>
                    <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ variables.label }>Bairro</Text>
                    <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>
            </View>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ variables.label }>Estado</Text>
                    <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ variables.label }>Zona</Text>
                    <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>
            </View>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ variables.label }>Número</Text>
                    <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ variables.label }>Complemento</Text>
                    <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>
            </View>
        </View>
    )
}