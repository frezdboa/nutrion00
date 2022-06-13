import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';

const Page2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text2}>{'Vous pouvez continuer vers l\'auto-questionnaire alimentaire ou bien commencer par un Quiz pour tester vos connaissances.'}</Text>


            <Text style={styles.text2}>{' '}</Text>


            <StyledButton
                type="secondary"
                content={"Continuer"}
                onPress="Confidentialité">
            </StyledButton>

            <StyledButton
                type="primary"
                content={"Testez mes connaissances \navec un Quiz !"}
                onPress="Quiz">
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
        margin: 20,
        textAlign: 'center',



    },

});

export default Page2