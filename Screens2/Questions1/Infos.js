import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos1 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"1. Les fruits et légumes (sous toutes leurs formes : crus ou cuits, frais, surgelés ou en conserve, en compote, en purée, en soupe, dans des plats cuisinés...)"}
            </Text>

        </SafeAreaView>
    )
}


export default Infos1