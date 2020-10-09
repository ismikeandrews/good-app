import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { Menu } from '../../shared'

import styles from './styles'

class ProcessosVaga extends Component{
    render(){
        return(
            <SafeAreaView style={ styles.container }>
                <TouchableOpacity style={ styles.voltar }
                onPress={() => this.props.navigation.navigate('Processos')}>
                    <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                </TouchableOpacity>

                <ScrollView style={ styles.scrollView }>
                    <View style={ styles.logo }>
                        <Image style={ styles.logoImg } source={require('../../assets/images/ijc.png')} />
                    </View>
                    <Text style={[ styles.text, styles.nome ]}>Instituto Jô Clemente</Text>

                    <Text style={[ styles.text, styles.cargo ]}>Assistente</Text>

                    <View style={ styles.item }>
                        <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        <Text style={[ styles.text, styles.endereco ]}>Avenida Lins de Vasconcelos, 1222</Text>
                    </View>

                    <View style={ styles.item }>
                        <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        <Text style={[ styles.text, styles.horario ]}>Tempo integral</Text>
                    </View>

                    <Text style={[ styles.text, styles.title ]}>Requisitos</Text>
                    <View style={ styles.requisitos }>
                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                            <Text style={[ styles.text, styles.requisito ]}>Comunicação</Text>
                        </View>
                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                            <Text style={[ styles.text, styles.requisito ]}>Organização</Text>
                        </View>
                    </View>

                    <Text style={[ styles.text, styles.title ]}>Benefícios</Text>
                    <View style={ styles.beneficios }>
                        <View style={ styles.item }>
                            <Text style={[ styles.text, styles.beneficio ]}>Vale Refeiação</Text>
                        </View>
                        <View style={ styles.item }>
                            <Text style={[ styles.text, styles.beneficio ]}>Vale Transporte</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={ styles.btn }
                    onPress={() => console.log('clicked')}>
                        <Text style={ styles.btnText }>Cancelar candidatura</Text>
                        <Image style={[ styles.icon, styles.iconX ]} source={require('../../assets/images/ijc.png')} />
                    </TouchableOpacity>
                </ScrollView>

                <Menu/>
            </SafeAreaView>
        )
    }
}

export { ProcessosVaga }