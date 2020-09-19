import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        color: color.dark_red,
        fontSize: 18,
        marginBottom: 20
    },
    btn: {
        backgroundColor: color.pink_light,
        width: '48%',
    },
    btnText: {
        color: color.white,
    },
})