import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'

export default StyleSheet.create({
    help: {
        bottom: 90,
        position: 'absolute',
        right: 10,
    },
    btn: {
        backgroundColor: color.orange,
        borderColor: color.pink_light,
        borderWidth: 3,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 5,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})