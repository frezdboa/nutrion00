import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var rep9b;
var score9b;



class Question9b extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    {"Les matières grasses ajoutées"}
                </Text>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 123, fontSize: 40 }}>{'                               '}</Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 9"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>





                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{'9b'} / {12}</Text>





                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Pour faire cuire et assaisonner les aliments, quelle matière grasse utilisez-vous préférentiellement ?"}
                    </Text>

                    <Pressable onPress={() => {
                        score9b = 2
                        rep9b = "9b. Plutôt une ou plusieurs matières grasses parmi : (huile d’olives, huile de noix/ noisette, huile de colza, huile de lin)"

                    }}
                        style={[styles2.button2, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Plutôt une ou plusieurs matières grasses parmi : (huile d’olives, huile de noix/ noisette, huile de colza, huile de lin)"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score9b = 0
                        rep9b = "9b.Plutôt une ou plusieurs matières grasses parmi : huile de tournesol, huile d’arachide, huile de maïs, huile de coco, huile de soja, huile de pépins de raisins, huile de mélange (ISIO 4, 4 graines végétales), beurre ordinaire, beurre allégé, margarine ordinaire, margarine allégée, margarine proactive, végétaline."

                    }}
                        style={[styles2.button3, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Plutôt une ou plusieurs matières grasses parmi :\n-huile de tournesol           -huile d’arachide\n-huile de maïs                   -huile de coco\n-huile de soja                    -beurre ordinaire\n-beurre allégé                   -margarine ordinaire\n-margarine allégée           -margarine proactive\n-végétaline \n-huile de pépins de raisins\n-huile de mélange (ISIO 4, 4 graines végétales)"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score9b = 1
                        rep9b = "9b. Plutôt les deux types de matères grasses, sans préférence"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{" Plutôt les deux types de matères grasses, sans préférence"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score9b = ""
                        rep9b = "9b. Ne s’applique pas/ je ne sais pas"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Ne s’applique pas/ je ne sais pas"}</Text>
                    </Pressable>


                </View>


                <View style={styles.container3}>
                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 9b"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 10', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b,



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
export default Question9b;

