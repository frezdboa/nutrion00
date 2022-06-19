import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Infos10 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"10. Les boissons sucrées : les jus de fruits, les boissons sucrées et les sodas, même light, les boissons dites « énergisantes », boissons chaudes sucrées"}
            </Text>

        </SafeAreaView>
    )
}


export default Infos10