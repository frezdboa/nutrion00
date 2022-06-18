import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations10 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principale:'}</Text>

            <Text style={styles.text3}>
                {"Pas plus d’un verre par jour de boisson sucrée (et prendre plutôt un fruit pressé)\n\nAttention, un thé ou café sucrés comptent pour une boisson sucrée"}
            </Text>

        </SafeAreaView>
    )
}


export default Recommandations10