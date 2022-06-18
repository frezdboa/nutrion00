import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';

const Page2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>


            <Text style={styles.text2}>{'En vous inscrivant d\'abord, vous aurez la possibilité de retrouver vos résultats par la suite'}</Text>


            <StyledButton type="primary"
                content={"S'inscrire"}
                onPress="Login">
            </StyledButton>


            <StyledButton
                type="secondary"
                content={"Continuer"}
                onPress="Consignes">
            </StyledButton>



            <Image
                source={require('../../assets/images/bonne2.png')}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    alignSelf: 'center',
                    opacity: 0.7,
                    maxHeight: "110%",
                    height: "110%",
                    width: "100%"


                }} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
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
        fontSize: 19,
        fontWeight: '400',
        color: 'black',
        margin: 20,
        textAlign: 'center',
        top: -30



    },

});

export default Page2