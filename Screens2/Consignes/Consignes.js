import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import { FontAwesome5 } from '@expo/vector-icons';

const Consignes = () => {


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text2}>{"Merci de répondre aux questions suivantes spontanément, en sélectionnant les réponses qui vous paraissent se rapprocher le plus de votre alimentation (l’alimentation peut s’équilibrer sur plusieurs jours : pour répondre aux questions, pensez à votre alimentation habituelle).\n \n Toujours lire l’intégralité des questions, y compris les instructions, avant de répondre.\n\nPour chaque question vous pouvez obtenir plus d'informations en cliquant sur le"}</Text>

            <FontAwesome5 name="info-circle" size={30} />

            <Text>{''}</Text>



            <StyledButton
                type="primary"
                content={"Première question"}
                onPress="Question 1">
            </StyledButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffe0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text1: {
        fontSize: 20,
        fontFamily: 'Roboto2',
        color: 'black',
        margin: 24,
        textAlign: 'center',
        marginTop: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    text2: {
        fontSize: 17,
        fontFamily: 'Roboto2',
        color: 'black',
        margin: 10,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 20,
    },

});

export default Consignes