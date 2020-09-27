import { StyleSheet } from 'react-native';
import color from '../../../../assets/utils/colors'

export default StyleSheet.create({
    content: {
        marginVertical: 40,
        width: '95%'
    },
    select: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectItem: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color.gray,
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 20,
        width: 230,
        
    },
    image: {
        height: 60,
        marginBottom: 20,
        paddingBottom: 10,
        width: 60,
    },
    label: {
        color: color.gray,
        fontSize: 18,
        textAlign: 'center',
    },
})