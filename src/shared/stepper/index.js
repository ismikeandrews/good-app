import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function Stepper(props){
    console.log(props.page)
    function checkTotal(){
        let steps = []
        for (let i = 0; i < props.total; i++) {
            steps.push(
                <Text style={props.page === i ? {color: 'red'} : {color: 'black'}} key={i}>{i + 1}</Text>
            )
        }
        return steps
    }

    return (
        <View>
            {checkTotal()}
        </View>
    )
}