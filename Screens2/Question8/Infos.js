import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos8 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"8. La charcuterie (saucisses, lardons, bacon, jambon blanc ou de volaille, viandes en conserve, jambons secs ou crus…)"}
            </Text>

        </SafeAreaView>
    )
}


export default Infos8