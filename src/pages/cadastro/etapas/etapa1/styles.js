import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import color from '../../../../assets/utils/colors'
import font from '../../../../assets/utils/fonts'
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default StyleSheet.create({
    container: {
        backgroundColor: color.white,
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 30,
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
    perfil: {
        alignItems: 'center',
    },
    perfilImg: {
        height: 72,
        marginVertical: 30,
        width: 100,
    },
    label: {
        color: color.gray,
        fontSize: 18,
        marginTop: 20,
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: color.gray,
        borderBottomWidth: 1,
        color: color.gray,
        fontSize: 18,
        height: 40,
    }
})