import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    text1: {
        fontSize: 20,
        fontFamily: 'Roboto2',
        color: 'black',
        margin: 24,
        textAlign: 'center',
        marginTop: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        position: 'relative',
    },

    text2: {
        fontSize: 19,
        fontFamily: 'Roboto2',
        textDecorationLine: 'underline',
        color: 'black',
        margin: 10,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 20,
    },

    text3: {
        fontSize: 15,
        fontFamily: 'Roboto2',
        fontStyle: 'italic',
        color: 'black',
        margin: 10,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
    },

    text4: {
        fontSize: 17,
        fontFamily: 'Roboto2',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#696969',
        margin: 10,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 2,
    },


});

export default styles;