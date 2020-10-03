import React from 'react'
import { View, Text } from 'react-native'
import { DescriptionBox } from '../../../../shared/description-box'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa1 extends React.Component {

    render(){
        return (
            <View style={ styles.content }>
                <Text style={[ variables.title, styles.title ]}>Sobre mim</Text>
                <Text style={ variables.subtitle }>Fale um pouco sobre você através de um vídeo ou por escrito</Text>
        
                <DescriptionBox placeholder='Escreva uma breve descrição sobre você'></DescriptionBox>
            </View>
        )
    }    
}

export {Etapa1}