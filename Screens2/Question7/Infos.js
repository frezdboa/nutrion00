import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos7 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"7. Le poisson : frais, surgelé, ou en conserve  \n\n*Poisson gras : sardines, maquereau, hareng, saumon."}
            </Text>

        </SafeAreaView>
    )
}


export default Infos7