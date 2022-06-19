import { Text, Pressable, View, Button, ScrollView } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';




var score12b = "indéfini", score12c1 = "indéfini", score12c2 = "indéfini";
var rep12c1, rep12c2, rep12c31 = " ", rep12c32 = " ", rep12c33 = " ", rep12c34 = " ", rep12c35 = " ", rep12c36 = " ", rep12c37 = " ", rep12c38 = " ", rep12c39 = " ", rep12c310 = " ";


class Question12c extends Component {
    constructor() {
        super()

        this.state = {
            buttonColor1: 'hsla(60,  80%, 50%, 0.45)',
            buttonColor2: 'hsla(60,  80%, 50%, 0.4)',
            buttonColor3: 'hsla(60,  80%, 50%, 0.3)',
            buttonColor4: 'hsla(60,  80%, 50%, 0.2)',
            buttonColor5: 'hsla(60,  80%, 50%, 0.15)',

            buttonColor1b: 'hsla(60,  80%, 50%, 0.45)',
            buttonColor2b: 'hsla(60,  80%, 50%, 0.4)',
            buttonColor3b: 'hsla(60,  80%, 50%, 0.3)',
            buttonColor4b: 'hsla(60,  80%, 50%, 0.2)',
            buttonColor5b: 'hsla(60,  80%, 50%, 0.15)',

            buttonColor1c: true,
            buttonColor2c: true,
            buttonColor3c: true,
            buttonColor4c: true,
            buttonColor5c: true,
            buttonColor6c: true,
            buttonColor7c: true,
            buttonColor8c: true,
            buttonColor9c: true,
            buttonColor10c: true,


        };

    }
    //1
    onButtonPress1 = () => {
        this.setState({ buttonColor1: 'hsla(60,  80%, 50%, 1)', buttonColor2: 'hsla(60,  80%, 50%, 0.4)', buttonColor3: 'hsla(60,  80%, 50%, 0.3)', buttonColor4: 'hsla(60,  80%, 50%, 0.2)', buttonColor5: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress2 = () => {
        this.setState({ buttonColor2: 'hsla(60,  80%, 50%, 1)', buttonColor1: 'hsla(60,  80%, 50%, 0.45)', buttonColor3: 'hsla(60,  80%, 50%, 0.3)', buttonColor4: 'hsla(60,  80%, 50%, 0.2)', buttonColor5: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress3 = () => {
        this.setState({ buttonColor3: 'hsla(60,  80%, 50%, 1)', buttonColor2: 'hsla(60,  80%, 50%, 0.4)', buttonColor1: 'hsla(60,  80%, 50%, 0.45)', buttonColor4: 'hsla(60,  80%, 50%, 0.2)', buttonColor5: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress4 = () => {
        this.setState({ buttonColor4: 'hsla(60,  80%, 50%, 1)', buttonColor2: 'hsla(60,  80%, 50%, 0.4)', buttonColor3: 'hsla(60,  80%, 50%, 0.3)', buttonColor1: 'hsla(60,  80%, 50%, 0.45)', buttonColor5: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress5 = () => {
        this.setState({ buttonColor5: 'hsla(60,  80%, 50%, 1)', buttonColor2: 'hsla(60,  80%, 50%, 0.4)', buttonColor3: 'hsla(60,  80%, 50%, 0.3)', buttonColor4: 'hsla(60,  80%, 50%, 0.2)', buttonColor1: 'hsla(60,  80%, 50%, 0.45)' });
    }
    //2
    onButtonPress1b = () => {
        this.setState({ buttonColor1b: 'hsla(60,  80%, 50%, 1)', buttonColor2b: 'hsla(60,  80%, 50%, 0.4)', buttonColor3b: 'hsla(60,  80%, 50%, 0.3)', buttonColor4b: 'hsla(60,  80%, 50%, 0.2)', buttonColor5b: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress2b = () => {
        this.setState({ buttonColor2b: 'hsla(60,  80%, 50%, 1)', buttonColor1b: 'hsla(60,  80%, 50%, 0.45)', buttonColor3b: 'hsla(60,  80%, 50%, 0.3)', buttonColor4b: 'hsla(60,  80%, 50%, 0.2)', buttonColor5b: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress3b = () => {
        this.setState({ buttonColor3b: 'hsla(60,  80%, 50%, 1)', buttonColor2b: 'hsla(60,  80%, 50%, 0.4)', buttonColor1b: 'hsla(60,  80%, 50%, 0.45)', buttonColor4b: 'hsla(60,  80%, 50%, 0.2)', buttonColor5b: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress4b = () => {
        this.setState({ buttonColor4b: 'hsla(60,  80%, 50%, 1)', buttonColor2b: 'hsla(60,  80%, 50%, 0.4)', buttonColor3b: 'hsla(60,  80%, 50%, 0.3)', buttonColor1b: 'hsla(60,  80%, 50%, 0.45)', buttonColor5b: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress5b = () => {
        this.setState({ buttonColor5b: 'hsla(60,  80%, 50%, 1)', buttonColor2b: 'hsla(60,  80%, 50%, 0.4)', buttonColor3b: 'hsla(60,  80%, 50%, 0.3)', buttonColor4b: 'hsla(60,  80%, 50%, 0.2)', buttonColor1b: 'hsla(60,  80%, 50%, 0.45)' });
    }
    //3
    onButtonPress1c = () => {
        this.setState({ buttonColor1c: !this.state.buttonColor1c });
    }
    onButtonPress2c = () => {
        this.setState({ buttonColor2c: !this.state.buttonColor2c });
    }
    onButtonPress3c = () => {
        this.setState({ buttonColor3c: !this.state.buttonColor3c });
    }
    onButtonPress4c = () => {
        this.setState({ buttonColor4c: !this.state.buttonColor4c });
    }
    onButtonPress5c = () => {
        this.setState({ buttonColor5c: !this.state.buttonColor5c });
    }
    onButtonPress6c = () => {
        this.setState({ buttonColor6c: !this.state.buttonColor6c });
    }
    onButtonPress7c = () => {
        this.setState({ buttonColor7c: !this.state.buttonColor7c });
    }
    onButtonPress8c = () => {
        this.setState({ buttonColor8c: !this.state.buttonColor8c });
    }
    onButtonPress9c = () => {
        this.setState({ buttonColor9c: !this.state.buttonColor9c });
    }
    onButtonPress10c = () => {
        this.setState({ buttonColor10c: !this.state.buttonColor10c, buttonColor1c: true, buttonColor2c: true, buttonColor3c: true, buttonColor4c: true, buttonColor5c: true, buttonColor6c: true, buttonColor7c: true, buttonColor8c: true, buttonColor9c: true });
    }

    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b,
            score10, rep10, score11, rep11,
            rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6, score11b,
            rep12a1, rep12a2, rep12a3, rep12a4, rep12a5, rep12a6, rep12a7, score12a,
            rep12b1, rep12b2, rep12b3, rep12b4, rep12b5, } = this.props.route.params;


        let Souvent12b = [rep12b1, rep12b2, rep12b3, rep12b4, rep12b5]

        //calcule score de la question 12b
        var compte = 0;
        for (var i = 0; i < Souvent12b.length; i++) {
            if ((Souvent12b[i] == "Souvent") || (Souvent12b[i] == "Très souvent")) { compte = compte + 1 }
        }
        if (compte >= 2) { score12b = 0 }
        if (compte == 1) { score12b = 1 }
        if (compte == 0) { score12b = 2 }


        //question3 cocher ou non 

        if (this.state.buttonColor1c == true) { rep12c31 = "" }
        if (this.state.buttonColor2c == true) { rep12c32 = "" }
        if (this.state.buttonColor3c == true) { rep12c33 = "" }
        if (this.state.buttonColor4c == true) { rep12c34 = "" }
        if (this.state.buttonColor5c == true) { rep12c35 = "" }
        if (this.state.buttonColor6c == true) { rep12c36 = "" }
        if (this.state.buttonColor7c == true) { rep12c37 = "" }
        if (this.state.buttonColor8c == true) { rep12c38 = "" }
        if (this.state.buttonColor9c == true) { rep12c39 = "" }
        if (this.state.buttonColor10c == true) { rep12c310 = "" }


        return (

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollview}
                scrollEnabled={true}
            >

                <SafeAreaView style={styles.container2}>


                    <Text
                        style={styles.text5}>
                        Les aliments gras, sucrés, salés et ultra-transformés
                    </Text>

                    <Pressable
                        onPress={() => this.props.navigation.navigate(("Infos 12c"))}
                        style={{ alignSelf: 'center', position: 'absolute', top: 85, zIndex: 5 }}>

                        <FontAwesome5 name="info-circle" size={30} />


                    </Pressable>


                    <Text style={{ fontSize: 16, fontStyle: 'italic', left: -140, top: -10, position: 'relative' }}>{'12c'} / {12}</Text>


                    <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 80, fontSize: 40 }}>{'                               '}</Text>

                    <View style={styles2.container}>

                        <Text //1
                            style={styles.text2}>
                            {"Les plats préparés du commerce (qu’ils soient frais, sous vide, surgelés ou en conserve), sont presque tous des « aliments ultra-transformés » ? (= formulations industrielles, contenant au minimum 4 ingrédients tels que des graisses, du sucre, du sel et surtout des additifs non utilisés en cuisine domestique). \n\nEn consommez-vous (choisir une seule réponse) : \n"}
                        </Text>


                        <Pressable onPress={() => {
                            this.onButtonPress1()

                            rep12c1 = "Très souvent"
                            score12c1 = 0

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2()

                            rep12c1 = "Souvent"
                            score12c1 = 0

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3()

                            rep12c1 = "Parfois"
                            score12c1 = 1

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4()

                            rep12c1 = "Rarement"
                            score12c1 = 2
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5()

                            rep12c1 = "Pas du tout"
                            score12c1 = 0

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>

                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>

                        <Text //2
                            style={styles.text2}>
                            {"Pour choisir les produits du commerce, vous aidez-vous au Nutri-Score (en choisissant par exemple des produits mieux classés dans l’échelle lorsque vous avez le choix) ? (choisir une seule réponse)\nLe Nutri-Score est un logo présent sur les emballages des produits alimentaires transformés et des boissons : échelle à 5 niveaux allant de A (produit le plus favorable sur le plan nutritionnel) à E (produit le moins favorable sur le plan nutritionnel) \n"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1b()

                            rep12c2 = "Très souvent"
                            score12c2 = 2

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2b()

                            rep12c2 = "Souvent"
                            score12c2 = 2

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3b()

                            rep12c2 = "Parfois"
                            score12c2 = 1

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4b()

                            rep12c2 = "Rarement"
                            score12c2 = 0
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5b()

                            rep12c2 = "Pas du tout"
                            score12c2 = 0

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>



                        <Text //3
                            style={styles.text2}>
                            {"Avez-vous l’habitude de mettre sur la table du repas de midi ou du soir (choisir une ou plusieurs réponses) :  \n"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1c()

                            rep12c31 = "Du beurre"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Du beurre"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2c()

                            rep12c32 = "De la crème fraîche"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"De la crème fraîche"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3c()

                            rep12c33 = "De l'huile d'olive"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"De l'huile d'olive"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4c()

                            rep12c34 = "De la vinaigrette"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"De la vinaigrette"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5c()

                            rep12c35 = "De la mayonnaise"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"De la mayonnaise"}</Text>
                        </Pressable>

                        <Pressable onPress={() => {
                            this.onButtonPress6c()

                            rep12c36 = "Du Ketchup"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor6c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Du Ketchup"}</Text>
                        </Pressable>

                        <Pressable onPress={() => {
                            this.onButtonPress7c()

                            rep12c37 = "De la sauce soja"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor7c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"De la sauce soja"}</Text>
                        </Pressable>

                        <Pressable onPress={() => {
                            this.onButtonPress8c()

                            rep12c38 = "Du Sel"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor8c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Du Sel"}</Text>
                        </Pressable>

                        <Pressable onPress={() => {
                            this.onButtonPress9c()

                            rep12c39 = "Du soda/ une boisson sucrée"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor9c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Du soda/ une boisson sucrée"}</Text>
                        </Pressable>

                        <Pressable onPress={() => {
                            this.onButtonPress10c()

                            rep12c310 = "Rien de tout cela"


                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor10c ? "hsla(60,  80%, 50%, 0.45)" : "hsla(60,  80%, 50%, 1)" }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rien de tout cela"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>





                    </View>

                    <View style={styles.container3}>
                        <StyledButton
                            type="primary"
                            content={"recommandations"}
                            // "Recommendations 1"
                            onPress={"Recommandations 12c"}>
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
                                    , score10, rep10, score11, rep11, score11b, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6, rep12a1, rep12a2, rep12a3, rep12a4, rep12a5, rep12a6, rep12a7,
                                    rep12b1, rep12b2, rep12b3, rep12b4, rep12b5, score12a, score12b,
                                    rep12c1, rep12c2, rep12c31, rep12c32, rep12c33, rep12c34, rep12c35, rep12c36, rep12c37, rep12c38, rep12c39, rep12c310, score12c1, score12c2,



                                });
                            }}
                        >
                            <Text style={[styles3.text, { color: 'white' }]}>{'Terminer'}</Text>
                        </Pressable>

                    </View>


                </SafeAreaView >

            </ScrollView>

        )


    }
}
export default Question12c;





