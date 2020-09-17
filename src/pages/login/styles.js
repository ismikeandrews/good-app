import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import color from '../../assets/utils/colors'
import font from '../../assets/utils/fonts'
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default StyleSheet.create({
    container: {
        backgroundColor: color.white,
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 30,
    },
    logo: {
        alignItems: 'center',
        width: '100%',
    },
    logoImg: {
        height: 72,
        marginVertical: 40,
        width: 100,
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
        borderRadius: 10,
        borderWidth: 1,
        color: color.gray,
        height: 45,
        paddingLeft: 15,
    },
    contentBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        borderRadius: 30,
    },
    btns: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        width: '48%',
    },
    btnText: {
        paddingVertical: 10,
        textAlign: 'center',
    },
    btnEntrar: {
        backgroundColor: color.pink_light,
        marginVertical: 30,
    },
    btnCadastro: {
        borderColor: color.dark_red,
    },
    btnCodigo: {
        borderColor: color.orange,
    },
    btnTextEntrar: {
        color: color.white,
    },
    btnTextCadastro: {
        color: color.dark_red,
    },
    btnTextCodigo: {
        color: color.orange,
    },
})