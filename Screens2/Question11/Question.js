import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score11 = "indéfini";
var rep11;


class Question11 extends Component {
    constructor() {
        super()

        this.state = {
            buttonColor1: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor2: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor3: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor4: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor5: 'hsla(120,  80%, 50%, 0.3)',   // default button color goes here
        };

    }

    onButtonPress1 = () => {
        this.setState({ buttonColor1: 'hsla(120,  80%, 50%, 1)', buttonColor2: 'hsla(120,  80%, 50%, 0.3)', buttonColor3: 'hsla(120,  80%, 50%, 0.3)', buttonColor4: 'hsla(120,  80%, 50%, 0.3)', buttonColor5: 'hsla(120,  80%, 50%, 0.3)' });
    }
    onButtonPress2 = () => {
        this.setState({ buttonColor2: 'hsla(120,  80%, 50%, 1)', buttonColor1: 'hsla(120,  80%, 50%, 0.3)', buttonColor3: 'hsla(120,  80%, 50%, 0.3)', buttonColor4: 'hsla(120,  80%, 50%, 0.3)', buttonColor5: 'hsla(120,  80%, 50%, 0.3)' });
    }
    onButtonPress3 = () => {
        this.setState({ buttonColor3: 'hsla(120,  80%, 50%, 1)', buttonColor2: 'hsla(120,  80%, 50%, 0.3)', buttonColor1: 'hsla(120,  80%, 50%, 0.3)', buttonColor4: 'hsla(120,  80%, 50%, 0.3)', buttonColor5: 'hsla(120,  80%, 50%, 0.3)' });
    }
    onButtonPress4 = () => {
        this.setState({ buttonColor4: 'hsla(120,  80%, 50%, 1)', buttonColor2: 'hsla(120,  80%, 50%, 0.3)', buttonColor3: 'hsla(120,  80%, 50%, 0.3)', buttonColor1: 'hsla(120,  80%, 50%, 0.3)', buttonColor5: 'hsla(120,  80%, 50%, 0.3)' });
    }
    onButtonPress5 = () => {
        this.setState({ buttonColor5: 'hsla(120,  80%, 50%, 1)', buttonColor2: 'hsla(120,  80%, 50%, 0.3)', buttonColor3: 'hsla(120,  80%, 50%, 0.3)', buttonColor4: 'hsla(120,  80%, 50%, 0.3)', buttonColor1: 'hsla(120,  80%, 50%, 0.3)' });
    }
    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b, score10, rep10 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    Les produits salés
                </Text>

                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 11"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>




                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{11} / {12}</Text>




                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Salez-vous systématiquement les plats avant de les consommer ?"}
                    </Text>

                    <Pressable onPress={() => {
                        this.onButtonPress1()
                        score11 = 0
                        rep11 = "11. Oui tout à fait"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor1 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Oui tout à fait"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        this.onButtonPress2()
                        score11 = 0
                        rep11 = "11. Oui plutôt"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor2 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Oui plutôt"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        this.onButtonPress3()
                        score11 = 1
                        rep11 = "11. Non plutôt pas"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor3 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Non plutôt pas"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        this.onButtonPress4()
                        score11 = 2
                        rep11 = "11. Non pas du tout"
                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor4 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Non pas du tout"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        this.onButtonPress5()
                        score11 = "indéfini"
                        rep11 = "11. Ne s’applique pas"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor5 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Ne s’applique pas"}</Text>
                    </Pressable>


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
                            this.props.navigation.navigate('Question 11b', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,
                                score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b, score10, rep10, score11, rep11



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
export default Question11;

