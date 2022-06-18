import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import StyledButton from '../../components/StyledButton';




const Recommendations1 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>



            <Text style={styles.text1}>{'Recommandation principale :'}</Text>

            <Text style={styles.text3}>
                {"Au moins 5 fruits et légumes par jour, par exemple 3 portions de légumes et 2 de fruits. Une portion c’est l’équivalent de 80 à 100 grammes, par exemple : une tomate de taille moyenne, une poignée de tomates cerises, 1 poignée de haricots verts, 1 bol de soupe, 1 pomme, 2 abricots, 4-5 fraises, 1 banane...\n Attention sont exclus des légumes : les pommes de terre, le maïs, les petits pois (= féculents)"}
            </Text>

            <Image
                source={require('../../assets/images/fruits.jpg')}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    alignSelf: 'center',
                    opacity: 0.3,


                }} />

        </SafeAreaView>
    )
}


export default Recommendations1