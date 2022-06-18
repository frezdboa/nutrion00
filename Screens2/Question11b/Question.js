import { Text, Pressable, View, Button, ScrollView } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score11b1, score11b2, score11b3, score11b4, score11b5, score11b6;
var rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6;


class Question11b extends Component {
    constructor() {
        super()

    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b, score10, rep10, score11, rep11 } = this.props.route.params;

        return (

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollview}
                scrollEnabled={true}
            >

                <SafeAreaView style={styles.container2}>


                    <Text
                        style={styles.text5}>
                        "Les produits salés "
                    </Text>


                    <Text style={{ fontSize: 16, fontStyle: 'italic', left: -140, top: -30, position: 'relative' }}>{'11b'} / {12}</Text>


                    <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 30, fontSize: 40 }}>{'                               '}</Text>

                    <View style={styles2.container}>

                        <Text
                            style={styles.text2}>
                            {"Ces aliments sont riches en sel caché. Les consommez-vous (choisir une seule réponse par aliments) :\n"}
                        </Text>


                        <Text //1
                            style={styles.text9}>
                            {"Biscuits apéritifs / fruits à coque salés / snacks salés"}
                        </Text>

                        <Pressable onPress={() => {
                            score11b1 = 0
                            rep11b1 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.45)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b1 = 1
                            rep11b1 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.4)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b1 = 2
                            rep11b1 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.3)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b1 = 3
                            rep11b1 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.2)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            score11b1 = 4
                            rep11b1 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.15)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>

                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>

                        <Text //2
                            style={styles.text9}>
                            {"\nPlats préparés du commerce"}
                        </Text>

                        <Pressable onPress={() => {
                            score11b2 = 0
                            rep11b2 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.45)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b2 = 1
                            rep11b2 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.4)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b2 = 2
                            rep11b2 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.3)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b2 = 3
                            rep11b2 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.2)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            score11b2 = 4
                            rep11b2 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.15)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>



                        <Text //3
                            style={styles.text9}>
                            {"\nCharcuterie"}
                        </Text>

                        <Pressable onPress={() => {
                            score11b3 = 0
                            rep11b3 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.45)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b3 = 1
                            rep11b3 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.4)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b3 = 2
                            rep11b3 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.3)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b3 = 3
                            rep11b3 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.2)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            score11b3 = 4
                            rep11b3 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.15)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>



                        <Text //4
                            style={styles.text9}>
                            {"\nSoupes déshydratées / bouillon KUB"}
                        </Text>

                        <Pressable onPress={() => {
                            score11b4 = 0
                            rep11b4 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.45)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b4 = 1
                            rep11b4 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.4)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b4 = 2
                            rep11b4 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.3)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b4 = 3
                            rep11b4 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.2)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            score11b4 = 4
                            rep11b4 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.15)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>


                        <Text //5
                            style={styles.text9}>
                            {"\nPain"}
                        </Text>

                        <Pressable onPress={() => {
                            score11b5 = 0
                            rep11b5 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.45)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b5 = 1
                            rep11b5 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.4)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b5 = 2
                            rep11b5 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.3)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b5 = 3
                            rep11b5 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.2)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            score11b5 = 4
                            rep11b5 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.15)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>


                        <Text //6
                            style={styles.text9}>
                            {"\nFromage"}
                        </Text>

                        <Pressable onPress={() => {
                            score11b6 = 0
                            rep11b6 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.45)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b6 = 1
                            rep11b6 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.4)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b6 = 2
                            rep11b6 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.3)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            score11b6 = 3
                            rep11b6 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.2)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            score11b6 = 4
                            rep11b6 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: "hsla(60,  80%, 50%, 0.15)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>

                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>


                    </View>

                    <View style={styles.container3}>
                        <StyledButton
                            type="primary"
                            content={"recommandations"}
                            // "Recommendations 1"
                            onPress={"Recommandations 11"}>
                        </StyledButton>



                        <Pressable
                            style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                            onPress={() => {
                                this.props.navigation.navigate('Question 12', {
                                    score1,
                                    rep1,
                                    score2,
                                    rep2,
                                    score3,
                                    rep3,
                                    score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b
                                    , score10, rep10, score11, rep11, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6


                                });
                            }}
                        >
                            <Text style={[styles3.text, { color: 'white' }]}>{'suivant'}</Text>
                        </Pressable>

                    </View>


                </SafeAreaView >

            </ScrollView>

        )


    }
}
export default Question11b;

