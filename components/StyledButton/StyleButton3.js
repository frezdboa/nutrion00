import React from 'react';
import { View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style2';
import { useNavigation } from '@react-navigation/native';

const StyledButton3 = props => {

    const { type, content, onPress, backgroundColor } = props;

    //const backgroundColor = type == 'primary' ? 'hsla(120,  80%, 50%, 0.8)' : 'hsla(120,  80%, 50%, 0.8)'
    const textColor = type == 'primary' ? 'black' : 'black'


    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}

                onPress={() => navigation.navigate(onPress)}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>

        </View>
    );
};

export default StyledButton3;