import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

class Checkbox extends React.Component {

    state = {
        active: false,
    }

    render() {
        return (    
            <TouchableOpacity style={ styles.checkbox }
            onPress={() => this.setState({ active : ! this.state.active })}>
                <View style={this.state.active === false ? styles.item : [styles.item, styles.itemActive]}>
                    <Image style={ styles.image } source={`../../assets/images/${this.props.img}`} />
                    <Text style={ styles.label }>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export {Checkbox}