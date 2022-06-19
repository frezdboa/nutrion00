import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations12a = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principale:'}</Text>

            <Text style={styles.text3}>
                {"Il est recommandé de limiter les aliments gras, sucrés, salés et ultra-transformés"}
            </Text>


        </SafeAreaView>
    )
}


export default Recommandations12a