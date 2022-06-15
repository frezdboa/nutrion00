import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style2';
import { useNavigation } from '@react-navigation/native';

var score1;

const StyledButton3 = props => {

    const { style, content, onPress, backgroundColor, number } = props;

    //const backgroundColor = type == 'primary' ? 'hsla(120,  80%, 50%, 0.8)' : 'hsla(120,  80%, 50%, 0.8)'


    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                score1 = score1 + onPress
            }}
                style={[styles.button, { backgroundColor: backgroundColor }]}
            >
                <Text style={[styles.text, { color: 'black' }]}>{content}</Text>
            </Pressable>


        </View>
    );
};

export default StyledButton3;