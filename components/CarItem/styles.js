import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
    },

    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',




    },

    title: {
        fontFamily: 'Roboto2',
        fontSize: 70,
        //fontWeight: 'bold',
        color: 'hsla(150, 100%, 50%, 0.8)',
        margin: 24,
        textAlign: 'center',
        marginTop: 16,



    },

    innerText: {
        fontSize: 70,
        fontFamily: 'Roboto2',
        color: '#f0e68c',
        margin: 24,
        textAlign: 'center',
        marginTop: 16,
    },

    subtitle: {
        fontSize: 25,
        fontFamily: 'Dancing',
        color: 'white',
        margin: 10,
        textAlign: 'center',
        bottom: 40,

    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.3,

    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 70,
        width: '100%',

    },

});

export default styles;