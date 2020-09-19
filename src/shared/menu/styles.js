import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
    item: {
        backgroundColor: '#eee',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        paddingVertical: 10,
        width: '25%',
    },
    itemIcon: {
        height: 30,
        padding: 10,
        width: 35,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 5,
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