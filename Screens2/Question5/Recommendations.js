import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations5 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principale:'}</Text>

            <Text style={styles.text3}>
                {"2 produits laitiers par jour pour les adultes\n\n2 produits laitiers par jour, c’est par exemple : un yaourt nature et un morceau de fromage\nPensez à compter les produits laitiers présents dans les produits cuisinés (fromage râpé etc)\n\nAttention sont exclus des produits laitiers : \n-la crème fraîche/ le beurre (= matières grasses), \n- les desserts lactés comme les crèmes desserts et flans (= produits gras et sucrés)"}
            </Text>

        </SafeAreaView>
    )
}


export default Recommandations5