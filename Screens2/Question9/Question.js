import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score9;
var rep9;


class Question9 extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    Les matières grasses ajoutées
                </Text>

                <Text>{''}</Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 9"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 125, fontSize: 40 }}>{'                               '}</Text>





                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{9} / {12}</Text>





                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"De manière générale, pensez-vous que votre alimentation est trop riche en matières grasses ajoutées (= matières grasses utilisées en cuisson et en assaisonnement) ?"}
                    </Text>
                    <Pressable onPress={() => {
                        score9 = 0
                        rep9 = "9. Oui tout à fait"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{" Oui tout à fait"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score9 = 1
                        rep9 = "9. Oui plutôt"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{" Oui plutôt"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score9 = 1
                        rep9 = "9.Non plutôt pas"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Non plutôt pas"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score9 = 2
                        rep9 = "9.Non pas du tout"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Non pas du tout"}</Text>
                    </Pressable>




                    <Pressable onPress={() => {
                        score9 = ""
                        rep9 = "9.Ne s’applique pas"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Ne s’applique pas"}</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>

                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 9"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 9b', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9



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
export default Question9;

