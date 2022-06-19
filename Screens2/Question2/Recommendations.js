import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principales :'}</Text>

            <Text style={styles.text3}>
                {"Une petite poignée par jour de fruits à coque non salés car ils sont riches en omega 3"}
            </Text>

        </SafeAreaView>
    )
}


export default Recommandations2