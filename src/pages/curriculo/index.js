import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { DescriptionBox, IconBox, Menu } from '../../shared/'

import variables from '../../shared/variables/styles'
import styles from './styles'

class Curriculo extends Component{
    render(){
        return(
            <View style={ styles.container }>
                {/* <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />

                <Text style={ styles.empty }>Cadastre um currículo para continuar</Text>

                <TouchableOpacity style={[ variables.btn, styles.btn ]}
                onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
                    <Text style={[ variables.btnText, styles.btnText ]}>Cadastrar</Text>
                </TouchableOpacity>
                
                <Menu/> */}

                <SafeAreaView style={ styles.container }>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.header }>
                            <Text style={[ styles.text, styles.title ]}>Meu currículo</Text>
                            <Text style={[ styles.text, styles.subtitle ]}>Um pouco sobre mim...</Text>
                        </View>

                        <DescriptionBox></DescriptionBox>

                        <View style={[ styles.item, styles.requisitos ]}>
                            <Text style={[ styles.text, styles.topic ]}>Requisitos</Text>
                            <Text style={[ styles.text, styles.desc ]}>Minhas formações básicas em...</Text>
                        </View>

                        <View style={[ styles.item, styles.habilidades ]}>
                            <Text style={[ styles.text, styles.topic ]}>Habilidades</Text>
                            <Text style={[ styles.text, styles.desc ]}>Eu sou bom com...</Text>
                            
                            <View style={ styles.list }>
                                <IconBox name='Comunicação' img='ijc.png'></IconBox>
                                <IconBox name='Códigos' img='ijc.png'></IconBox>
                                <IconBox name='Raciocínio' img='ijc.png'></IconBox>
                                <IconBox name='Organização' img='ijc.png'></IconBox>
                            </View>
                        </View>

                        <View style={[ styles.item, styles.objetivo ]}>
                            <Text style={[ styles.text, styles.topic ]}>Objetivo profissional</Text>
                            <Text style={[ styles.text, styles.desc ]}>Gostaria de trabalhar com...</Text>
                            
                            <View style={ styles.list }>
                                <IconBox name='Educação' img='ijc.png'></IconBox>
                                <IconBox name='Esportes' img='ijc.png'></IconBox>
                                <IconBox name='TI' img='ijc.png'></IconBox>
                            </View>
                        </View>

                        <View style={ styles.list }>
                            <TouchableOpacity style={[ variables.btn, styles.btn, styles.dwl ]}
                            onPress={() => console.log('clicked')}>
                                <Text style={ styles.btnText }>Download</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ variables.btn, styles.btn ]}
                            onPress={() => console.log('clicked')}>
                                <Text style={ styles.btnText }>Editar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>

                <Menu/>
            </View>
        )
    }
}

export { Curriculo }