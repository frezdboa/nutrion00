import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score5;
var rep5;


class Question5 extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "Les produits Laitiers"
                </Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 5"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>




                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{5} / {12}</Text>





                <View style={styles2.container}>
                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger :"}
                    </Text>
                    <Pressable onPress={() => {
                        score5 = 0
                        rep5 = "5.Beaucoup moins de 2 produits laitiers par jour/ jamais de produits laitiers"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins de 2 produits laitiers par jour/ jamais de produits laitiers"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score5 = 1
                        rep5 = "5.Un peu moins de 2 produits laitiers par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins de 2 produits laitiers par jour"}</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        score5 = 2
                        rep5 = "5.Environ 2 produits laitiers par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ 2 produits laitiers par jour"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score5 = 1
                        rep5 = "5.Un peu plus de 2 produits laitiers par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus de 2 produits laitiers par jour"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score5 = 0
                        rep5 = "5.Beaucoup plus de 2 produits laitiers par jour"

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.3)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus de 2 produits laitiers par jour"}</Text>
                    </Pressable>


                </View>

                <View style={styles.container3}>

                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 5"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 6', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5,



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
export default Question5;

