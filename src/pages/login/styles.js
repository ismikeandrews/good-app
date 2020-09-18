import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'
import font from '../../assets/utils/fonts'

export default StyleSheet.create({
    logo: {
        alignItems: 'center',
        width: '100%',
    },
    logoImg: {
        height: 72,
        marginTop: 30,
        marginBottom: 40,
        width: 100,
    },
    label: {
        marginTop: 20,
    },
    btnLink: {
        alignItems: 'flex-end',
        marginBottom: 20,
        marginRight: 3,
        marginTop: 10,
    },
    link: {
        color: color.pink,
        textAlign: 'right',
    },
    btns: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        width: '48%',
    },
    btnEntrar: {
        backgroundColor: color.pink_light,
        marginBottom: 30,
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