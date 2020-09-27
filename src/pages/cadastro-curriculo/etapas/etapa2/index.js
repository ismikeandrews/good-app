import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa2 extends React.Component {
    
    state = {
        active: false
    }

    render() {
        return (
            <View style={ styles.content }>
                <Text style={ variables.title }>Requisitos</Text>
                <Text style={ variables.subtitle }>Formações básicas em...</Text>
    
                <TouchableOpacity style={ styles.select }
                onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                    {this.state.active === false ?
                        <View style={ styles.selectItem }>
                                <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                                <Text style={ styles.label }>Escolaridade</Text>
                        </View>
                        :
                        <View style={ styles.selectItem }>
                                <Text style={ styles.label }>Escolaridade</Text>
                                <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                        </View>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

export {Etapa2}