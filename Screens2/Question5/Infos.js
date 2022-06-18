import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos5 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"5. Les produits laitiers : lait, yaourts, fromage, fromage blanc\n\nAttention sont exclus des produits laitiers : \n-la crème fraîche/ le beurre (= matières grasses), \n- les desserts lactés comme les crèmes desserts et flans (= produits gras et sucrés)"}
            </Text>


        </SafeAreaView>
    )
}


export default Infos5