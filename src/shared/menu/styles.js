import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        width: '25%',
    },
    itemIcon: {
        height: 40,
        padding: 10,
        width: 40,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,
    },
    textPink: {
        color: color.pink_light
    },
    textOrange: {
        color: color.orange
    },
    textRed: {
        color: color.dark_red
    },
})