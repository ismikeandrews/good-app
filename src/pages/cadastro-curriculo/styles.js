import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight+50,
        paddingBottom: Constants.statusBarHeight+50,
        paddingHorizontal: 20,
    },
    contentBtn: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    btn: {
        width: '48%',
    },
    btnText: {
        color: color.white,
    },
    btnPrev: {
        backgroundColor: color.dark_red,
    },
    btnNext: {
        backgroundColor: color.pink_light,
    },
    btnCadastrar: {
        backgroundColor: color.orange,
    },
})