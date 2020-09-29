import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Checkbox } from '../../../../shared'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa4 extends React.Component {
    
    render() {
          return (
            <View style={ styles.content }>
                <Text style={ variables.title }>Habilidades</Text>
                <Text style={ variables.subtitle }>Eu sou bom com...</Text>

                <View style={ styles.container }>
                    <Checkbox name="Artes" img='ijc.png'></Checkbox>
                    <Checkbox name="Contas" img='ijc.png'></Checkbox>
                    <Checkbox name="Crianças" img='ijc.png'></Checkbox>
                    <Checkbox name="Códigos" img='ijc.png'></Checkbox>
                </View>
            </View>
        )
    }  
}

export {Etapa4}