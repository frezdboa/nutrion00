import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations3 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principales :'}</Text>

            <Text style={styles.text3}>
                {"Au moins 2 fois par semaine des légumes secs car ils sont naturellement riches en fibres"}
            </Text>


        </SafeAreaView>
    )
}


export default Recommandations3