import { Text, Pressable, View, } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';






var score12, score11b;
var rep12, rep11b;



class Question12 extends Component {
    constructor() {
        super();
    }

    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b,
            score10, rep10, score11, rep11, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6 } = this.props.route.params;


        let Souvent = [rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6]

        //calcule score de la question 11b
        var compte = 0;
        for (var i = 0; i < Souvent.length; i++) {
            if ((Souvent[i] == "Souvent") || (Souvent[i] == "Très souvent")) { compte = compte + 1 }
        }
        if (compte >= 4) { score11b = 0 }
        if (compte == 2 || compte == 3) { score11b = 1 }
        if (compte == 1 || compte == 0) { score11b = 2 }



        return (


            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "Légumes secs"
                </Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 12"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>






                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{12} / {12}</Text>




                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger \ndes légumes secs :"}
                    </Text>
                    <Pressable onPress={() => {
                        score12 = 0
                        rep12 = 1
                        this.changeColor.bind(this)

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{""}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score12 = 1
                        rep12 = 1

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{ }</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score12 = 2
                        rep12 = 1

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{ }</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score12 = 2
                        rep12 = 1

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{ }</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score12 = 2
                        rep12 = 1

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{ }</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>

                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 12"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Résultats', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b
                                , score10, rep10, score11, rep11, score11b, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6


                            });
                        }}
                    >
                        <Text style={[styles3.text, { color: 'white' }]}>{'Terminer'}</Text>
                    </Pressable>

                </View>




            </SafeAreaView >

        )


    }
}
export default Question12;

