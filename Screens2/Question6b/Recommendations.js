import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations6b = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandations principale:'}</Text>

            <Text style={styles.text3}>
                {"Privilégier la volaille, et limiter les autres viandes (porc, bœuf, veau, mouton, agneau, abats) à 500 g par semaine.\n\n500 g de viande hors volaille par semaine, cela correspond à environ 3 ou 4 steaks"}
            </Text>

        </SafeAreaView>
    )
}


export default Recommandations6b