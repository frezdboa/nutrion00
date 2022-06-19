import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos12c = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"12. Les aliments gras, sucrés, salés et ultra-transformés : céréales du petit déjeuner sucrées, gâteaux, choccolat, crèmes dessert, glaces, biscuits apéritifs, charcuterie et certains plats préparés du commerce"}
            </Text>

        </SafeAreaView>
    )
}


export default Infos12c