import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos3 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"3. Les légumes secs (lentilles, haricots secs, pois cassés, pois chiches, fèves…)"}
            </Text>

            <StyledButton
                type="secondary"
                content={"revenir à la question"}
                onPress="Question 3">
            </StyledButton>


        </SafeAreaView>
    )
}


export default Infos3