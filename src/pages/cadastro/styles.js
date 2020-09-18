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
    title: {
        color: color.gray,
        fontSize: 25,
    },
    subtitle: {
        color: color.gray,
        fontSize: 14,
        marginBottom: 15,
    },
    contentBtn: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: 30,
        width: '48%',
        marginVertical: 30,
        marginHorizontal: 5,
    },
    btnText: {
        color: color.white,
        paddingVertical: 10,
        textAlign: 'center',
    },
    btnCadastrar: {
        backgroundColor: color.orange,
    },
    btnNext: {
        backgroundColor: color.pink_light,
    },
    btnPrev: {
        backgroundColor: color.dark_red,
    },
})