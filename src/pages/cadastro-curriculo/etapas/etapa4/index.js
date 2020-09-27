import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa4 extends React.Component {
    
    state = {
        active: false,
        habilidades: '',
    }
    
    render() {
          return (
            <View style={ styles.content }>
                <Text style={ variables.title }>Habilidades</Text>
                <Text style={ variables.subtitle }>Eu sou bom com...</Text>

                <View style={ styles.container }>
                    <TouchableOpacity style={ styles.checkbox }
                    onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                        <View style={this.state.active === false ? styles.item : [styles.item, styles.itemActive]}>
                            <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={ styles.label }>Artes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkbox }
                    onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                        <View style={this.state.active === false ? styles.item : [styles.item, styles.itemActive]}>
                            <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={ styles.label }>Artes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.checkbox }
                    onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                        <View style={this.state.active === false ? styles.item : [styles.item, styles.itemActive]}>
                            <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={ styles.label }>Artes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkbox }
                    onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                        <View style={this.state.active === false ? styles.item : [styles.item, styles.itemActive]}>
                            <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={ styles.label }>Artes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }  
}

export {Etapa4}