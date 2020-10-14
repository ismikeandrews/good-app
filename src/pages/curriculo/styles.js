import { StyleSheet } from 'react-native';
import color from '../../assets/utils/colors'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginTop: Constants.statusBarHeight+10,
        paddingBottom: Constants.statusBarHeight+20,
    },
    title: {
        color: '#6b6b6b',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'left',
    },
    subtitle: {
        color: '#A2A2A2',
        textAlign: 'left',
    },
    icon: {
        height: 60,
        marginBottom: 20,
        width: 60,
    },
    empty: {
        color: color.pink,
        fontSize: 18,
        marginBottom: 20
    },
    topic: {
        color: color.pink,
        fontWeight: '700',
        textAlign: 'left',
    },
    item: {
        marginBottom: 20,
    },
    text: {
        color: '#6b6b6b',
        fontSize: 18,
        marginBottom: 10,
    },
    list: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    last: {
        marginBottom: 70,
    },
    btn: {
        backgroundColor: color.pink_light,
        width: '48%',
    },
    dwl: {
        backgroundColor: color.dark_red,
    },
    btnText: {
        color: color.white,
        textAlign: 'center',
    },
})