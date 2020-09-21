import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        paddingBottom: 50,
        paddingHorizontal: 30,
    },
    btn: {
        backgroundColor: color.pink_light,
        width: '48%',
    },
    btnText: {
        color: color.white,
    },
})