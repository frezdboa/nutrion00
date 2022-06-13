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
        color: 'hsla(150, 100%, 50%, 1)',
        margin: 10,
        textAlign: 'center',
        marginTop: -10,

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
        height: '105%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.7,
        backgroundColor: 'black',


    },

    buttonsContainer: {
        position: 'relative',
        marginTop: 100,
        width: '100%',

    },

    logo: {
        width: 80,
        height: 70,
        resizeMode: 'contain',
        alignSelf: 'center',
        top: 50,
        zIndex: 3,

    },

});

export default styles;