import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Stepper(props){
    function checkTotal(){
        let steps = []
        for (let i = 0; i < props.total; i++) {
            steps.push(
                <Text style={props.page >= i ? [styles.step, styles.stepActive] : styles.step } key={i}>{i + 1}</Text>
            )
        }
        return steps
    }

    return (
        <View style={ styles.stepper }>
            {checkTotal()}
        </View>
    )
}