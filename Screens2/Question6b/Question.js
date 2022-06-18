import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score6b;
var rep6b;


class Question6b extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6,
        } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "La viande"
                </Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 6b"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>





                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{'6b'} / {12}</Text>





                <View style={styles2.container}>
                    <Text
                        style={styles.text2}>
                        {"Concernant la viande hors volaille, pensez-vous en consommer :"}
                    </Text>
                    <Pressable onPress={() => {
                        score6b = 2
                        rep6b = "6b. Beaucoup moins de 500g par semaine (pas toutes les semaines ou jamais)"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{" Beaucoup moins de 500g par semaine (pas toutes les semaines ou jamais)"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score6b = 2
                        rep6b = "6b.Un peu moins de 500g par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins de 500g par semaine"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score6b = 2
                        rep6b = "6b.Environ 500g par semaine (environ 3 ou 4 fois par semaine)"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ 500g par semaine (environ 3 ou 4 fois par semaine)"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score6b = 1
                        rep6b = "6b.Un peu plus de 500g par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus de 500g par semaine"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score6b = 0
                        rep6b = "6b.Beaucoup plus de 500g par semaine (tous les jours ou presque)"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus de 500g par semaine (tous les jours ou presque)"}</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>
                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 6b"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 7', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5, score6, rep6, score6b, rep6b,




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
export default Question6b;

