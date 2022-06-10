import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"2. Les fruits à coque non salés (noix, noisettes, amandes, pistaches, etc)"}
            </Text>

            <StyledButton
                type="secondary"
                content={"revenir à la question"}
                onPress="Question 2">
            </StyledButton>


        </SafeAreaView>
    )
}


export default Infos2