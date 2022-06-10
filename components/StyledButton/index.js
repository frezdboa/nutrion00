import React from 'react';
import { View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const StyledButton = props => {

    const { type, content, onPress } = props;

    const backgroundColor = type == 'primary' ? 'hsla(150, 100%, 50%, 0.8)' : 'rgba(0,0,0,0.8)'
    const textColor = type == 'primary' ? 'black' : 'white'

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

export default StyledButton;