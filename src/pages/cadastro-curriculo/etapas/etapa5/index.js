import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from '../../../../shared'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa5 extends React.Component {
    
    render() {
          return (
            <View style={ styles.container }>
                <Text style={ variables.title }>Habilidades</Text>
                <Text style={ variables.subtitle }>Eu sou bom com...</Text>

                <View style={ styles.content }>
                    <Checkbox name="Artes" img='ijc.png'></Checkbox>
                    <Checkbox name="Contas" img='ijc.png'></Checkbox>
                    <Checkbox name="Crianças" img='ijc.png'></Checkbox>
                    <Checkbox name="Códigos" img='ijc.png'></Checkbox>
                    <Checkbox name="Artes" img='ijc.png'></Checkbox>
                    <Checkbox name="Contas" img='ijc.png'></Checkbox>
                    <Checkbox name="Crianças" img='ijc.png'></Checkbox>
                    <Checkbox name="Códigos" img='ijc.png'></Checkbox>
                </View>
            </View>
        )
    }  
}

export {Etapa5}