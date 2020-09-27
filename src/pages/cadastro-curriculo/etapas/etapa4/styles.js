import { StyleSheet } from 'react-native';
import color from '../../../../assets/utils/colors'

export default StyleSheet.create({
    content: {
        marginVertical: 30,
        width: '95%'
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    item: {
        alignItems: 'center',
        borderColor: color.gray,
        borderRadius: 5,
        borderWidth: 3,
        paddingBottom: 10,
        paddingTop: 20,
        paddingHorizontal: 40,
    },
    itemActive: {
        backgroundColor: '#ec377c40',
        borderColor: color.pink_light,
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
    }
})