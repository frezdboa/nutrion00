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
        fontSize: 25,
        //fontWeight: 'bold',
        color: 'hsla(150, 100%, 50%, 1)',
        margin: 10,
        position: 'absolute',
        top: -110,
        left: 15,
        opacity: 0.7,


    },

    innerText: {
        fontSize: 25,
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
        bottom: 10,

    },

    image: {
        width: '100%',
        height: '105%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.6,
        backgroundColor: 'black',


    },

    buttonsContainer: {
        position: 'relative',
        marginTop: 100,
        width: '100%',

    },

    logo: {
        height: 230,
        resizeMode: 'contain',
        alignSelf: 'center',
        top: 0,
        zIndex: 3,


    },

});

export default styles;