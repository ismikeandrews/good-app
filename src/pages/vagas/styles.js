import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingHorizontal: 0,
    },
    text: {
        color: color.pink,
        fontSize: 18,
        marginBottom: 20,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: color.pink_light,
        paddingHorizontal: 17,
    },
    btnText: {
        color: color.white,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    scrollView: {
        marginLeft: -10,
    },
})