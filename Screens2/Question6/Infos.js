import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos6 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"6. Les autre viandes sont : porc, bœuf, veau, mouton, agneau, abats \n\nSelectionnez ne s'applique si vous ne consommez pas de viande"}
            </Text>

        </SafeAreaView>
    )
}


export default Infos6