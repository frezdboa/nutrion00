import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations8 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principale:'}</Text>

            <Text style={styles.text3}>
                {"Limiter la charcuterie à 150g par semaine (et privilégiez le jambon blanc ou de volaille)\n\n150g de charcuterie, cela correspond à environ 3 tranches de jambon."}
            </Text>

        </SafeAreaView>
    )
}


export default Recommandations8