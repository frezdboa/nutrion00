import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import layouts from "./Layouts";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { Component } from "react";


//const navigation = useNavigation();

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { accord_stat_age: '', pseudo: '', password: '' };
    }

    InsertRecord = () => {
        var accord_stat_age = this.state.accord_stat_age;
        var pseudo = this.state.pseudo;
        var password = this.state.password;

        if (accord_stat_age.length == 0 || pseudo.length == 0 || password.length == 0) {

            alert('Un ou plusieurs champs sont manquant');
        }
        else {
            var InsertAPIURL = "http://10.0.2.2:80/api/insert.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                accord_stat_age: accord_stat_age,
                pseudo: pseudo,
                password: password
            };

            fetch(InsertAPIURL,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(Data)
                }
            )
                .then((response) => response.json())
                .then((response) => {
                    alert(response[0].Message);
                }
                )
                .catch((error) => {
                    alert("Erreur" + error);
                }
                )
        }

    }

    render() {
        return (
            <View style={style.root}>
                <View>

                    <Text style={style.text}>Âge</Text>

                    <View style={style.input_container}>
                        <TextInput
                            placeholder="accord_stat_age"
                            keyboardType='numeric'
                            onChangeText={accord_stat_age => this.setState({ accord_stat_age })}

                        />
                    </View>

                    <Text style={style.text}>Nom d'utilisateur</Text>

                    <View style={style.input_container}>
                        <TextInput
                            placeholder="pseudo"
                            onChangeText={pseudo => this.setState({ pseudo })}
                        />
                    </View>

                    <Text style={style.text}>Mot de passe</Text>

                    <View style={style.input_container}>
                        <TextInput
                            placeholder="password" secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>

                </View>

                <Text>{'\n'}</Text>

                <Button
                    title="Accepter l'utilisation des données personnelles" color='gray'
                    onPress={() => {

                        alert('Vous avez accepté l\'utilisation de vos données personnelles')
                    }
                    }
                >
                </Button>
                <Text></Text>
                <Button
                    title="Inscription"
                    style={style.button}
                    onPress={this.InsertRecord}>



                </Button>

                <Image
                    source={require('../../quiz/assets/images/fruits.png')}
                    style={{
                        width: 500,
                        height: 300,
                        zIndex: -1,
                        position: 'absolute',
                        bottom: 0,
                        alignSelf: 'center',
                        opacity: 0.1,


                    }}
                    resizeMode={'contain'}
                />
                <Image
                    source={require('../../quiz/assets/images/légumes.png')}
                    style={{
                        width: 500,
                        height: 350,
                        zIndex: -1,
                        position: 'absolute',
                        bottom: 330,
                        alignSelf: 'center',
                        opacity: 0.1,

                    }}
                    resizeMode={'contain'}
                />


            </View>
        );
    };
};

const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: layouts.paddingHorizontal,
        paddingVertical: layouts.paddingVertical,
        backgroundColor: layouts.bgColor

    },

    input_container: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff'

    },

    input: {
        padding: 10

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'layouts.secondary',
        padding: 15,
        borderRadius: 20,
    },
    button_text: {
        textAlign: 'center',
        color: '#fff'
    }
})