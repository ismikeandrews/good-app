import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, } from 'react-native'
import { Menu, Vaga } from '../../shared/'

import variables from '../../shared/variables/styles'
import styles from './styles'

class Vagas extends Component{
    render(){
        return(
            <View style={ styles.container }>
                {/* <Text style={ styles.text }>
                    Nenhuma vaga encontrada no momento T_T
                </Text>

                <TouchableOpacity style={[ variables.btn, styles.btn ]}
                onPress={() => console.log('click')}>
                    <Text style={[ variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                </TouchableOpacity>
                <Menu/> */}

                <SafeAreaView style={ styles.slider } >
                    <ScrollView style={ styles.scrollView } horizontal>
                        <Vaga></Vaga>
                        <Vaga></Vaga>
                        <Vaga></Vaga>
                    </ScrollView>
                </SafeAreaView>

                <Menu/>
            </View>
        )
    }
}

export { Vagas }