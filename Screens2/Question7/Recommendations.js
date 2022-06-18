import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations7 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandations principale:'}</Text>

            <Text style={styles.text3}>
                {"Deux fois par semaine du poisson, dont un poisson gras (sardines, maquereau, hareng, saumon)\n\nUne portion de poisson équivaut à 100 g, un petit pavé de saumon ou une boite de sardine."}
            </Text>
        </SafeAreaView>
    )
}


export default Recommandations7