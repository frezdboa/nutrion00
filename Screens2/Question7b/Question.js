import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score7b;
var rep7b;


class Question7b extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>

                <Text>{''}</Text>

                <Text
                    style={styles.text5}>
                    "Le poisson"
                </Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 7"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 130, fontSize: 40 }}>{'                               '}</Text>





                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{'7b'} / {12}</Text>




                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger du poisson (sardines, maquereau, hareng, saumon) :"}
                    </Text>
                    <Pressable onPress={() => {
                        score7b = 0
                        rep7b = "7b.Beaucoup moins d'une fois par semaine (je n’en consomme pas tous les mois/ jamais)"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins d'une fois par semaine (je n’en consomme pas tous les mois/ jamais)"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score7b = 1
                        rep7b = "7.Un peu moins d'une fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins d'une fois par semaine"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score7b = 2
                        rep7b = "7.Environ une fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ une fois par semaine"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score7b = 2
                        rep7b = "7.Un peu plus d'une fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus d'une fois par semaine"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score7b = 2
                        rep7b = "7.Beaucoup plus d'une fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus d'une fois par semaine"}</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>
                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 7b"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 8', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b



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
export default Question7b;

