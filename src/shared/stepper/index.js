import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function Stepper(props){
    function checkTotal(){
        console.log("teste")
        return(
            <Text>
                Teste
            </Text>
        )
    }

    return (
        <View>
            {() => checkTotal()}
        </View>
    )
}