import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommendations1 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={true}
        >
            <SafeAreaView style={{ backgroundColor: 'white' }}>



                {/* <Text style={styles.text1}>{'Recommandation principale :'}</Text>

            <Text style={styles.text3}>
                {"Au moins 5 fruits et légumes par jour, par exemple 3 portions de légumes et 2 de fruits. Une portion c’est l’équivalent de 80 à 100 grammes, par exemple : une tomate de taille moyenne, une poignée de tomates cerises, 1 poignée de haricots verts, 1 bol de soupe, 1 pomme, 2 abricots, 4-5 fraises, 1 banane...\n Attention sont exclus des légumes : les pommes de terre, le maïs, les petits pois (= féculents)"}
            </Text> */}

                <Image
                    source={require('../../assets/images/capture.jpg')}
                    style={{
                        top: 100,
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -100,



                    }} />

                <Image
                    source={require('../../assets/images/capture2.jpg')}
                    style={{
                        width: '100%',

                        opacity: 1,
                        resizeMode: 'contain',
                        marginVertical: -100,




                    }} />
                <Image
                    source={require('../../assets/images/cap3.jpg')}
                    style={{
                        width: '100%',
                        opacity: 1,
                        resizeMode: 'contain',
                        marginTop: -210,




                    }} />

            </SafeAreaView>

        </ScrollView>
    )
}


export default Recommendations1