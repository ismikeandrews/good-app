import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { Etapa1, Etapa2, Etapa3, Etapa4, Etapa5 } from './etapas'
import { Stepper, Menu } from '../../shared/'

import variables from '../../shared/variables/styles'
import styles from './styles'

class CadastroCurriculo extends Component{

    state = {page: 0, total: 5}

    currentPage(){
        if (this.state.page === 0) {
            return (
                <Etapa1/>
            )
        }
        if (this.state.page === 1) {
            return (
                <Etapa2/>
            )
        }
        if (this.state.page === 2) {
            return (
                <Etapa3/>
            )
        }
        if (this.state.page === 3) {
            return (
                <Etapa4/>
            )
        }
        if (this.state.page === 4) {
            return (
                <Etapa5/>
            )
        }
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Stepper page={this.state.page} total={this.state.total}/>
                    <ScrollView style={styles.scrollView}>
                    {/* <View style={ styles.container }> */}

                        {this.currentPage()}

                        <View style={[ variables.contentBtn, styles.contentBtn ]}>
                            {this.state.page + 1 === this.state.total ?
                                <TouchableOpacity style={[ variables.btn, styles.btn, styles.btnCadastrar ]}>
                                    <Text style={[ variables.btnText, styles.btnText ]}>Cadastrar</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={[ variables.btn, styles.btn, styles.btnNext ]} onPress={() => this.setState({page: this.state.page + 1})}>
                                    <Text style={[ variables.btnText, styles.btnText ]}>Próximo</Text>
                                </TouchableOpacity>
                            }
                            {this.state.page > 0 ? 
                                <TouchableOpacity style={[ variables.btn, styles.btn, styles.btnPrev ]} onPress={() => this.setState({page: this.state.page - 1})}>
                                    <Text style={[ variables.btnText, styles.btnText ]}>Voltar</Text>
                                </TouchableOpacity> :
                                null
                            }
                        </View>
                        
                    {/* </View> */}
                    </ScrollView>
                <Menu/>
            </SafeAreaView>
        )
    }
}

export {CadastroCurriculo};