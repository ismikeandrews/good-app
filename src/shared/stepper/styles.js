import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import color from '../../assets/utils/colors'
import font from '../../assets/utils/fonts'
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default StyleSheet.create({
    stepper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    step: {
        borderColor: color.gray,
        borderRadius: 50,
        borderWidth: 2,
        color: color.gray,
        fontSize: 20,
        fontWeight: 'bold',
        height: 30,
        marginTop: 50,
        textAlign: 'center',
        width: 30,
    },
    stepActive: {
        borderColor: color.orange,
        color: color.orange,
    }
})