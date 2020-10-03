import { StyleSheet } from 'react-native';
import color from '../../../../assets/utils/colors'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        marginVertical: 30,
        minHeight: Constants.statusBarHeight+350,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight+100,
    },
    yes: {
        marginTop: 20
    },
    btn: {
        alignItems: 'center',
        borderColor: color.gray,
        borderRadius: 5,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
        paddingTop: 10,
        width: '48%',
    },
    btnActive: {
        backgroundColor: '#ec377c40',
        borderColor: color.pink_light,
    },
    icon: {
        height: 30,
        marginBottom: 0,
        paddingBottom: 10,
        width: 40,
    },
    label: {
        color: color.gray,
        fontSize: 18,
        textAlign: 'center',
    },
    form: {
        marginTop: 20,
    },
    formContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    formItem: {
        width: '48%',
    },
    formName: {
        width: '100%',
    },
})