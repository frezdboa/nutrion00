import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button, Pressable } from 'react-native'
import { auth } from 'firebase'
import StyledButton from '../components/StyledButton'

const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16 }}>{"Vous êtes connecté\n "}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Déconnexion</Text>
            </TouchableOpacity>


            <Pressable
                style={styles.button}

                onPress={() => navigation.navigate("Page2")}
            >
                <Text style={styles.buttonText}>Retour</Text>
            </Pressable>



        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})