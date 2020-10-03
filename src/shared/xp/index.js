import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { DescriptionBox } from '../description-box'

import variables from '../variables/styles'
import styles from './styles'

class Xp extends React.Component {

    render() {
        return (
            <View style={ styles.form }>
                <View style={ styles.formContent }>
                    <View style={ styles.formName }>
                        <Text style={ variables.label }>Nome da empresa</Text>
                        <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                </View>

                <View style={ styles.formContent }>
                    <View style={ styles.formItem }>
                        <Text style={ variables.label }>Área</Text>
                        <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                        
                    <View style={ styles.formItem }>
                        <Text style={ variables.label }>Cargo</Text>
                        <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                </View>

                <View style={ styles.formContent }>
                    <View style={ styles.formItem }>
                        <Text style={ variables.label }>Data de início</Text>
                        <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                        
                    <View style={ styles.formItem }>
                        <Text style={ variables.label }>Data de término</Text>
                        <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                </View>

                <Text style={ variables.label }>Sobre o emprego</Text>
                <DescriptionBox placeholder='Escreva uma breve descrição sobre seu emprego e suas experiências'></DescriptionBox>
            </View>
        )
    }
}

export {Xp}