import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommandations4 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={true}
        >
            <SafeAreaView style={{ backgroundColor: 'white' }}>

                <Image
                    source={require('../../assets/images/cap41.jpg')}
                    style={{
                        top: 90,
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -150,



                    }} />

                <Image
                    source={require('../../assets/images/cap42.jpg')}
                    style={{
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -50,




                    }} />

                <Image
                    source={require('../../assets/images/cap43.jpg')}
                    style={{
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginTop: -100,




                    }} />
            </SafeAreaView>

        </ScrollView>
    )
}


export default Recommandations4