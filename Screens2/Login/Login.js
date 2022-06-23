import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../firebase.js'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const [showNextButton, setShowNextButton] = useState(false)

    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <View style={styles.buttonContainer}>


                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>S'enregistrer</Text>
                    </TouchableOpacity>

                </View>
            )
        } else {
            return null
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />


                <View style={styles.buttonContainer2}>

                    <Text style={styles.Text}>{"Pour vous enregistrer vous devez accepter l'utilisation de vos données. \nAinsi en répondant au questionnaire, vous aurez le choix de nous transmettre vos réponses dans un but de recherche médical et statistique"}</Text>


                    <TouchableOpacity
                        onPress={() => { alert('Vous avez accepté l\'utilisation de vos données'), setShowNextButton(true) }}
                        style={[styles.button2]}
                    >
                        <Text style={styles.buttonText}>Accepter l'utilisation des données</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </TouchableOpacity>

                    {renderNextButton()}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',

    },
    inputContainer: {
        top: 30,
        alignSelf: 'center',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        top: 45,
        marginVertical: 5,
    },
    buttonContainer: {

        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonContainer2: {

        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
        marginTop: 60,
    },
    button: {
        backgroundColor: '#0782F9',
        width: 200,
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    button2: {
        backgroundColor: 'grey',
        width: '170%',
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10,
        alignItems: 'center'

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    Text: {
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10,


    },
})