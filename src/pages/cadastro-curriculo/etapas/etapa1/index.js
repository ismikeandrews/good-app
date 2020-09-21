import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

export default function Etapa1(){
    return (
        <View>
            <Text style={[ variables.title, styles.title ]}>Sobre mim</Text>
            <Text style={ variables.subtitle }>Fale um pouco sobre você através de um vídeo ou por escrito</Text>

            <View style={ styles.tabs }>
                <TouchableOpacity style={ styles.tabsItem }>
                    <Image style={ styles.tabsImg } source={require('../../../../assets/images/ijc.png')} />
                </TouchableOpacity>
                <View style={ styles.bar } />
                <TouchableOpacity style={ styles.tabsItem }>
                    <Image style={ styles.tabsImg } source={require('../../../../assets/images/ijc.png')} />
                </TouchableOpacity>
            </View>

            <View style={ styles.desc }>
            {/* {this.state.tab === 0 ? */}
                {/* <Input style={ styles.video } type={ File }/> */}
                {/* accept={.mp4, .avi, .mkv, .ogg, .ogm, .mpg, .mpeg, .vob, .bvcd, .bsvcd} */}
                {/* : */}
                <TextInput style={ styles.textarea } placeholder={ 'Escreva uma breve descrição sobre você' } onChangeText={text => onChangeText(text)} />
            {/* } */}
            </View>

            {/* <Text style={ variables.label }>Nome completo</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Email</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ variables.label }>Data de Nascimento</Text>
            <TextInput style={ variables.input } onChangeText={ text => onChangeText(text) }/> */}
        </View>
    )
}