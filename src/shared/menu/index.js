import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'

import variables from '../../shared/variables/styles'
import styles from './styles'

export default function Menu(){
    return(
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.item }
            onPress={() => console.log('clicked')}>
                <Image style={ styles.itemIcon } source={require('../../assets/images/ijc.png')} />
                <Text style={[ styles.text, styles.textPink ]}>Processos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.item }
            onPress={() => console.log('clicked')}>
                <Image style={ styles.itemIcon } source={require('../../assets/images/ijc.png')} />
                <Text style={[ styles.text, styles.textOrange ]}>Currículo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.item }
            onPress={() => console.log('clicked')}>
                <Image style={ styles.itemIcon } source={require('../../assets/images/ijc.png')} />
                <Text style={[ styles.text, styles.textRed ]}>Vagas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.item }
            onPress={() => console.log('clicked')}>
                <Image style={ styles.itemIcon } source={require('../../assets/images/ijc.png')} />
                <Text style={[ styles.text, styles.textOrange ]}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.item }
            onPress={() => console.log('clicked')}>
                <Image style={ styles.itemIcon } source={require('../../assets/images/ijc.png')} />
                <Text style={[ styles.text, styles.textPink ]}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}
