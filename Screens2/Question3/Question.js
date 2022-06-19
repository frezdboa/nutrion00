import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';





var score3 = "indéfini";
var rep3;


class Question3 extends Component {
    constructor() {
        super()
        this.state = {
            buttonColor1: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor2: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor3: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor4: 'hsla(120,  80%, 50%, 0.3)',
            buttonColor5: 'hsla(120,  80%, 50%, 0.3)'  // default button color goes here
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

        const { score1, rep1, score2, rep2 } = this.props.route.params;

        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    Légumes secs
                </Text>

                {/* <Text>score 1: {score1}</Text>
                <Text>réponse 1 : {rep1}</Text>
                <Text>rép2: {rep2}</Text>
                <Text>score 2: {score2}</Text> */}



                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 3"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>



                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{3} / {12}</Text>




                <View style={styles2.container}>
                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger des légumes secs :"}
                    </Text>

                    <Pressable onPress={() => {
                        this.onButtonPress1()
                        score3 = 0
                        rep3 = "3.Beaucoup moins souvent que deux fois par semaine (je n’en consomme pas toutes les semaines/ jamais)"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor1 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins souvent que deux fois par semaine (je n’en consomme pas toutes les semaines/ jamais)"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        this.onButtonPress2()
                        score3 = 1
                        rep3 = "3.Un peu moins souvent que deux fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor2 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins souvent que deux fois par semaine"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        this.onButtonPress3()
                        score3 = 2
                        rep3 = "3.Environ deux fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor3 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ deux fois par semaine"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        this.onButtonPress4()
                        score3 = 2
                        rep3 = "3.Un peu plus souvent que deux fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor4 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus souvent que deux fois par semaine"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        this.onButtonPress5()
                        score3 = 2
                        rep3 = "3.Beaucoup plus souvent que deux fois par semaine"

                    }}
                        style={[styles2.button, { backgroundColor: this.state.buttonColor5 }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus souvent que deux fois par semaine"}</Text>
                    </Pressable>


                </View>


                <View style={styles.container3}>

                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommandations 3"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 4', {
                                score1,
                                rep1,
                                score2,
                                rep2,
                                score3,
                                rep3,


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
export default Question3;

