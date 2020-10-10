import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBox } from '../icon-box'

class Checkbox extends React.Component {

    state = {
        active: false,
    }

    render() {
        return (    
            <TouchableOpacity
            onPress={() => this.setState({ active : ! this.state.active })}>
                <IconBox active={this.state.active} name={this.props.name} img={this.props.img}></IconBox>
            </TouchableOpacity>
        )
    }
}

export {Checkbox}