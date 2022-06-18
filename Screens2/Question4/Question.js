import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score4;
var rep4;


class Question4 extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "Les féculents complets"
                </Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 4"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>


                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{4} / {12}</Text>



                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger :"}
                    </Text>

                    <Pressable onPress={() => {
                        score4 = 0
                        rep4 = "4.Beaucoup moins d’un féculent complet par jour/ jamais de féculent complet"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins d’un féculent complet par jour/ jamais de féculent complet"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score4 = 1
                        rep4 = "4.Un peu moins d’un féculent complet par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins d’un féculent complet par jour"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score4 = 2
                        rep4 = "4.Environ un féculent complet par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ un féculent complet par jour"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score4 = 2
                        rep4 = "4.Un peu plus d’un féculent complet par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus d’un féculent complet par jour"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score4 = 2
                        rep4 = "4.Beaucoup plus d’un féculent complet par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus d’un féculent complet par jour"}</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>

                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 4"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 5', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4,



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
export default Question4;

