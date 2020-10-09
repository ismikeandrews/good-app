import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { Menu } from '../../shared'

import variables from '../../shared/variables/styles'
import styles from './styles'

class Processos extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Text style={[ styles.text, styles.title ]}>Status das candidaturas</Text>
                    <Text style={[ styles.text, styles.subtitle ]}>Acompanhe os processos das suas candidaturas</Text>

                    <View style={ styles.tabs }>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabAll ]}
                            onPress={() => console.log('clicked')}>
                            <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabAprovado ]}
                            onPress={() => console.log('clicked')}>
                            <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabAndamento ]}
                            onPress={() => console.log('clicked')}>
                            <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabReprovado ]}
                            onPress={() => console.log('clicked')}>
                            <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <SafeAreaView style={ styles.content }>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.vagas }>
                            <TouchableOpacity style={ styles.vagaItem }
                            onPress={() => this.props.navigation.navigate('ProcessosVaga')}>
                                <Image style={ styles.logo } source={require('../../assets/images/ijc.png')} />
                                
                                <View style={ styles.desc }>
                                    <Text style={ styles.cargo }>Assistente</Text>
                                    <Text style={ styles.nome }>Assistente</Text>
                                    
                                    <View style={ styles.statusBox }>
                                        <Text style={[ styles.dot, styles.dotAndamento ]}>●</Text>
                                        <Text style={ styles.status }>Em análise...</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.vagaItem }
                            onPress={() => this.props.navigation.navigate('ProcessosVaga')}>
                                <Image style={ styles.logo } source={require('../../assets/images/ijc.png')} />
                                
                                <View style={ styles.desc }>
                                    <Text style={ styles.cargo }>Professor de Matemática</Text>
                                    <Text style={ styles.nome }>Education & Future</Text>
                                    
                                    <View style={ styles.statusBox }>
                                        <Text style={[ styles.dot, styles.dotAndamento ]}>●</Text>
                                        <Text style={ styles.status }>Em análise...</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* <View style={[ variables.container, styles.container, styles.view ]}>
                                <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                                <Text style={ styles.text }>Cadastre um currículo para continuar</Text>
                                <TouchableOpacity style={[ variables.btn, styles.btn ]}
                                onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
                                    <Text style={[ variables.btnText, styles.btnText ]}>Cadastrar</Text>
                                </TouchableOpacity>
        
                            <Menu/>
                        </View> */}
                    </ScrollView>

                    <Menu/>
                </SafeAreaView>
            </View>
        )
    }
}

export { Processos }