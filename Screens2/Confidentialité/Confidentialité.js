import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';

const Questionnaire = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text2}>{'Nous vous informons que vous n\'acceptez actuellement pas l\'enregistrement de vos réponses et donc l\'utilisation de vos données personnelles.\n'}</Text>

            <Button
                title="Accepter l'utilisation des données personnelles" color='gray'
                onPress={() => alert('Vous avez accepté l\'utilisation de vos données personnelles')}
            >
            </Button>

            <Text style={styles.text2}>{' '}</Text>


            <StyledButton
                type="primary"
                content={"Continuer"}
                onPress="Consignes">
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
    },

});

export default Questionnaire