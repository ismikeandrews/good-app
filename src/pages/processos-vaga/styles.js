import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight+20,
        paddingBottom: Constants.statusBarHeight+70,
        paddingHorizontal: 20,
    },
    voltar: {
        marginBottom: 20,
        width: '100%',
    },
    logo: {
        alignItems: 'center',
    },
    logoImg: {
        height: 120,
        marginBottom: 30,
        maxWidth: 170,
    },
    text: {
        color: '#6b6b6b',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        color: color.pink,
        fontWeight: '700',
        marginTop: 15,
        textAlign: 'left',
    },
    nome: {
        color: color.pink,
        fontSize: 22,
        fontWeight: '700',
    },
    cargo: {
        color: color.orange,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    item: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginVertical: 5,
    },
    icon: {
        height: 25,
        marginRight: 10,
        width: 25,
    },
    iconX: {
        marginLeft: 10,
    },
    btn: {
        alignItems: 'center',
        borderColor: color.dark_red,
        borderRadius: 30,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btnText: {
        color: color.dark_red,
        fontSize: 18,
    },
})