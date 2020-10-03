import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from '../../../../shared'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa4 extends React.Component {
    
    render() {
          return (
            <View style={ styles.container }>
                <Text style={ variables.title }>Objetivo profissional</Text>
                <Text style={ variables.subtitle }>Eu quero trabalhar com...</Text>

                <View style={ styles.content }>
                    <Checkbox name="Alimentos" img='ijc.png'></Checkbox>
                    <Checkbox name="Marketing" img='ijc.png'></Checkbox>
                    <Checkbox name="Tecnologia" img='ijc.png'></Checkbox>
                    <Checkbox name="Vendas" img='ijc.png'></Checkbox>
                    <Checkbox name="Alimentos" img='ijc.png'></Checkbox>
                    <Checkbox name="Marketing" img='ijc.png'></Checkbox>
                    <Checkbox name="Tecnologia" img='ijc.png'></Checkbox>
                    <Checkbox name="Vendas" img='ijc.png'></Checkbox>
                </View>
            </View>
        )
    }  
}

export {Etapa4}