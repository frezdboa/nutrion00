import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles3 from '../../components/StyledButton/style';





var score2;
var rep2;


class Question2 extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "Fruits à coques non salés"
                </Text>



                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 2"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>





                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{2} / {12}</Text>





                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger :"}
                    </Text>

                    <Pressable onPress={() => {
                        score2 = 0
                        rep2 = "2.Beaucoup moins d’une petite poignée par jour de fruits à coque non salés (je n’en consomme pas toutes les semaines / jamais)"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins d’une petite poignée par jour de fruits à coque non salés (je n’en consomme pas toutes les semaines / jamais)"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score2 = 1
                        rep2 = "2.Un peu moins d’une petite poignée par jour de fruits à coque non salés"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins d’une petite poignée par jour de fruits à coque non salés"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score2 = 2
                        rep2 = "2.Environ une petite poignée par jour de fruits à coque non salés"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ une petite poignée par jour de fruits à coque non salés"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score2 = 1
                        rep2 = "2.Un peu plus d’une petite poignée par jour de fruits à coque non salés"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus d’une petite poignée par jour de fruits à coque non salés"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score2 = 0
                        rep2 = "2.Beaucoup plus d’une petite poignée par jour de fruits à coque non salés"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus d’une petite poignée par jour de fruits à coque non salés"}</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>


                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 2"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 3', {
                                score2,
                                rep2,
                                score1,
                                rep1,

                            });
                        }}
                    >
                        <Text style={[styles3.text, { color: 'white' }]}>{'suivant'}</Text>
                    </Pressable>

                </View>


            </SafeAreaView >

        )


    }
}
export default Question2;