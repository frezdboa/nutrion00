import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


const Recommandations5 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={true}
        >


            <SafeAreaView style={{ backgroundColor: 'white' }}>


                <Image
                    source={require('../../assets/images/cap51.jpg')}
                    style={{
                        top: 90,
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -20,



                    }} />

                <Image
                    source={require('../../assets/images/cap52.jpg')}
                    style={{
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -20,




                    }} />

                <Image
                    source={require('../../assets/images/cap53.jpg')}
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


export default Recommandations5