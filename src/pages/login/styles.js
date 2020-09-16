import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import color from '../../assets/utils/colors'
import font from '../../assets/utils/fonts'

export default StyleSheet.create({
    container: {
        backgroundColor: color.white,
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    title: {
        color: color.gray,
        fontSize: 25,
    },
    subtitle: {
        color: color.gray,
        fontSize: 14,
        marginBottom: 15,
    },
    label: {
        color: color.gray,
        fontSize: 20,
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        backgroundColor: 'white',
        borderColor: color.gray,
        borderRadius: 7,
        borderWidth: 1,
        color: color.gray,
        height: 45,
        paddingLeft: 15,
    },
    btnEntrar: {
        backgroundColor: color.pink,
        color: 'white',
        marginTop: 30,
    },
    btn: {
        backgroundColor: color.white,
        borderColor: color.gray,
        color: color.gray,
        borderRadius: 15,
        width: '100%',
    }
})