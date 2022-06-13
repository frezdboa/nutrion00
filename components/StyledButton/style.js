import React from 'react';
import { FlatList, Platform, ScrollView, StatusBar, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
    },
    button: {
        height: 60,
        borderRadius: 30,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',


    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 1,
        textTransform: 'uppercase',
        fontFamily: 'Roboto2',
        textAlign: 'center'






    },
});

export default styles;