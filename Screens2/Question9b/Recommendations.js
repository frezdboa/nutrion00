import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations9b = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principale:'}</Text>

            <Text style={styles.text3}>
                {"Privilégiez l’huile de colza, de noix et d’olive. Les matières grasses ajoutées : huile, beurre et margarine peuvent être consommées tous les jours en petite quantités."}
            </Text>

        </SafeAreaView>
    )
}


export default Recommandations9b