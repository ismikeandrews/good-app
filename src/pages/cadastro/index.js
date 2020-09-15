import React, {Component} from 'react';
import { View, Text, TextInput, Button } from 'react-native'
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
                <Stepper page={this.state.page} total={this.state.total}/>
                {this.currentPage()}
                {this.state.page + 1 === this.state.total ?
                    <Button
                    title="Cadastrar"/> :
                    <Button
                    title="Próximo"
                    onPress={() => this.setState({page: this.state.page + 1})}/>
                }
                {this.state.page > 0 ? 
                    <Button
                    title="Voltar"
                    onPress={() => this.setState({page: this.state.page - 1})}/> :
                    <Text></Text>
                }
            </View>
        )
    }
}

export { Cadastro }