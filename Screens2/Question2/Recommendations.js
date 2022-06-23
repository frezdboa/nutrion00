import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations2 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={true}
        >
            <SafeAreaView style={{ backgroundColor: 'white' }}>

                <Image
                    source={require('../../assets/images/cap21.jpg')}
                    style={{
                        top: 100,
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -100,



                    }} />

                <Image
                    source={require('../../assets/images/cap22.jpg')}
                    style={{
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -20,




                    }} />
            </SafeAreaView>

        </ScrollView>
    )
}


export default Recommandations2