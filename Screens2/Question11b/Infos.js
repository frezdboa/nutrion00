import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos11b = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"11. Les produits salés : charcuterie, biscuits apéritifs, snacks, plats préparés du commerce, soupes déshydratées, fromage, pain… et le sel"}
            </Text>

        </SafeAreaView>
    )
}


export default Infos11b