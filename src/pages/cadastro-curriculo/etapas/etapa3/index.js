import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { DescriptionBox } from '../../../../shared/description-box'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa3 extends React.Component {

    state = {
        no: false,
        yes: false,
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ variables.title }>Experiência profissional</Text>
                <Text style={ variables.subtitle }>Você já trabalhou antes? Conte-nos um pouco...</Text>
    
                <View style={ this.state.yes === false ? styles.content : [styles.content, styles.yes] }>
                    <TouchableOpacity style={[ this.state.no === false ? styles.btn : [styles.btn, styles.btnActive] ]}
                    onPress={() => this.setState( this.state.yes === true ? this.setState({ yes: false, no: true }) : this.setState({ yes: false, no: true }) )}>
                        <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                        <Text style={ styles.label }>Não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[ this.state.yes === false ? styles.btn : [styles.btn, styles.btnActive] ]}
                    onPress={() => this.setState( this.state.no === true ? this.setState({ no: false, yes: true }) : this.setState({ no: false, yes: true }) )}>
                        <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                        <Text style={ styles.label }>Sim</Text>
                    </TouchableOpacity>
                </View>
                
                { this.state.yes === true ?
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
                    :
                    null
                }
            </View>
        )
    }
}

export {Etapa3}