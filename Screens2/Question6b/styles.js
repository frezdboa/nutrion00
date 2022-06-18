import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    container2: {
        flex: 1,
        backgroundColor: '#f0fff0',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    container3: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20
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
        fontSize: 22,
        fontFamily: 'Roboto2',
        color: 'black',
        margin: 10,
        marginTop: 30,

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

    text5: {
        fontSize: 22,
        fontFamily: 'Roboto2',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        textAlign: 'center',
        position: 'absolute',
        top: 100,
        marginBottom: 10
    },


});

export default styles;