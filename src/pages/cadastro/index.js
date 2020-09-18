import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Etapa1, Etapa2, Etapa3 } from './etapas'
import { Stepper } from '../../shared'
import styles from './styles'

class Cadastro extends Component{

    state = {page: 0, total: 3}

    async register(){
        console.log("Login")
    }

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
    }

    render(){
        return(
            <View style={styles.container}>
                {this.currentPage()}

                <Stepper style={ styles.stepper } page={this.state.page} total={this.state.total}/>
                
                <View style={styles.contentBtn}>
                    {this.state.page + 1 === this.state.total ?
                        <TouchableOpacity style={[ styles.btn, styles.btnCadastrar ]}>
                            <Text style={ styles.btnText }>Cadastrar</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={[ styles.btn, styles.btnNext ]} onPress={() => this.setState({page: this.state.page + 1})}>
                            <Text style={ styles.btnText }>Próximo</Text>
                        </TouchableOpacity>
                    }
                    {this.state.page > 0 ? 
                        <TouchableOpacity style={[ styles.btn, styles.btnPrev ]} onPress={() => this.setState({page: this.state.page - 1})}>
                            <Text style={ styles.btnText }>Voltar</Text>
                        </TouchableOpacity> :
                        null
                    }
                </View>
            </View>
        )
    }
}

export { Cadastro }