import { Text, Pressable, View, Button, ScrollView } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import styles3 from '../../components/StyledButton/style';




var score12a = "indéfini";
var rep12b1, rep12b2, rep12b3, rep12b4, rep12b5;


class Question12b extends Component {
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

            buttonColor1c: 'hsla(60,  80%, 50%, 0.45)',
            buttonColor2c: 'hsla(60,  80%, 50%, 0.4)',
            buttonColor3c: 'hsla(60,  80%, 50%, 0.3)',
            buttonColor4c: 'hsla(60,  80%, 50%, 0.2)',
            buttonColor5c: 'hsla(60,  80%, 50%, 0.15)',

            buttonColor1d: 'hsla(60,  80%, 50%, 0.45)',
            buttonColor2d: 'hsla(60,  80%, 50%, 0.4)',
            buttonColor3d: 'hsla(60,  80%, 50%, 0.3)',
            buttonColor4d: 'hsla(60,  80%, 50%, 0.2)',
            buttonColor5d: 'hsla(60,  80%, 50%, 0.15)',

            buttonColor1e: 'hsla(60,  80%, 50%, 0.45)',
            buttonColor2e: 'hsla(60,  80%, 50%, 0.4)',
            buttonColor3e: 'hsla(60,  80%, 50%, 0.3)',
            buttonColor4e: 'hsla(60,  80%, 50%, 0.2)',
            buttonColor5e: 'hsla(60,  80%, 50%, 0.15)',

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
        this.setState({ buttonColor1c: 'hsla(60,  80%, 50%, 1)', buttonColor2c: 'hsla(60,  80%, 50%, 0.4)', buttonColor3c: 'hsla(60,  80%, 50%, 0.3)', buttonColor4c: 'hsla(60,  80%, 50%, 0.2)', buttonColor5c: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress2c = () => {
        this.setState({ buttonColor2c: 'hsla(60,  80%, 50%, 1)', buttonColor1c: 'hsla(60,  80%, 50%, 0.45)', buttonColor3c: 'hsla(60,  80%, 50%, 0.3)', buttonColor4c: 'hsla(60,  80%, 50%, 0.2)', buttonColor5c: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress3c = () => {
        this.setState({ buttonColor3c: 'hsla(60,  80%, 50%, 1)', buttonColor2c: 'hsla(60,  80%, 50%, 0.4)', buttonColor1c: 'hsla(60,  80%, 50%, 0.45)', buttonColor4c: 'hsla(60,  80%, 50%, 0.2)', buttonColor5c: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress4c = () => {
        this.setState({ buttonColor4c: 'hsla(60,  80%, 50%, 1)', buttonColor2c: 'hsla(60,  80%, 50%, 0.4)', buttonColor3c: 'hsla(60,  80%, 50%, 0.3)', buttonColor1c: 'hsla(60,  80%, 50%, 0.45)', buttonColor5c: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress5c = () => {
        this.setState({ buttonColor5c: 'hsla(60,  80%, 50%, 1)', buttonColor2c: 'hsla(60,  80%, 50%, 0.4)', buttonColor3c: 'hsla(60,  80%, 50%, 0.3)', buttonColor4c: 'hsla(60,  80%, 50%, 0.2)', buttonColor1c: 'hsla(60,  80%, 50%, 0.45)' });
    }
    //4
    onButtonPress1d = () => {
        this.setState({ buttonColor1d: 'hsla(60,  80%, 50%, 1)', buttonColor2d: 'hsla(60,  80%, 50%, 0.4)', buttonColor3d: 'hsla(60,  80%, 50%, 0.3)', buttonColor4d: 'hsla(60,  80%, 50%, 0.2)', buttonColor5d: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress2d = () => {
        this.setState({ buttonColor2d: 'hsla(60,  80%, 50%, 1)', buttonColor1d: 'hsla(60,  80%, 50%, 0.45)', buttonColor3d: 'hsla(60,  80%, 50%, 0.3)', buttonColor4d: 'hsla(60,  80%, 50%, 0.2)', buttonColor5d: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress3d = () => {
        this.setState({ buttonColor3d: 'hsla(60,  80%, 50%, 1)', buttonColor2d: 'hsla(60,  80%, 50%, 0.4)', buttonColor1d: 'hsla(60,  80%, 50%, 0.45)', buttonColor4d: 'hsla(60,  80%, 50%, 0.2)', buttonColor5d: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress4d = () => {
        this.setState({ buttonColor4d: 'hsla(60,  80%, 50%, 1)', buttonColor2d: 'hsla(60,  80%, 50%, 0.4)', buttonColor3d: 'hsla(60,  80%, 50%, 0.3)', buttonColor1d: 'hsla(60,  80%, 50%, 0.45)', buttonColor5d: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress5d = () => {
        this.setState({ buttonColor5d: 'hsla(60,  80%, 50%, 1)', buttonColor2d: 'hsla(60,  80%, 50%, 0.4)', buttonColor3d: 'hsla(60,  80%, 50%, 0.3)', buttonColor4d: 'hsla(60,  80%, 50%, 0.2)', buttonColor1d: 'hsla(60,  80%, 50%, 0.45)' });
    }

    //5 
    onButtonPress1e = () => {
        this.setState({ buttonColor1e: 'hsla(60,  80%, 50%, 1)', buttonColor2e: 'hsla(60,  80%, 50%, 0.4)', buttonColor3e: 'hsla(60,  80%, 50%, 0.3)', buttonColor4e: 'hsla(60,  80%, 50%, 0.2)', buttonColor5e: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress2e = () => {
        this.setState({ buttonColor2e: 'hsla(60,  80%, 50%, 1)', buttonColor1e: 'hsla(60,  80%, 50%, 0.45)', buttonColor3e: 'hsla(60,  80%, 50%, 0.3)', buttonColor4e: 'hsla(60,  80%, 50%, 0.2)', buttonColor5e: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress3e = () => {
        this.setState({ buttonColor3e: 'hsla(60,  80%, 50%, 1)', buttonColor2e: 'hsla(60,  80%, 50%, 0.4)', buttonColor1e: 'hsla(60,  80%, 50%, 0.45)', buttonColor4e: 'hsla(60,  80%, 50%, 0.2)', buttonColor5e: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress4e = () => {
        this.setState({ buttonColor4e: 'hsla(60,  80%, 50%, 1)', buttonColor2e: 'hsla(60,  80%, 50%, 0.4)', buttonColor3e: 'hsla(60,  80%, 50%, 0.3)', buttonColor1e: 'hsla(60,  80%, 50%, 0.45)', buttonColor5e: 'hsla(60,  80%, 50%, 0.15)' });
    }
    onButtonPress5e = () => {
        this.setState({ buttonColor5e: 'hsla(60,  80%, 50%, 1)', buttonColor2e: 'hsla(60,  80%, 50%, 0.4)', buttonColor3e: 'hsla(60,  80%, 50%, 0.3)', buttonColor4e: 'hsla(60,  80%, 50%, 0.2)', buttonColor1e: 'hsla(60,  80%, 50%, 0.45)' });
    }



    render() {

        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b,
            score10, rep10, score11, rep11,
            rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6, score11b,
            rep12a1, rep12a2, rep12a3, rep12a4, rep12a5, rep12a6, rep12a7, } = this.props.route.params;


        let Souvent12a = [rep12a1, rep12a2, rep12a3, rep12a4, rep12a5, rep12a6, rep12a7]

        //calcule score de la question 12a
        var compte = 0;
        for (var i = 0; i < Souvent12a.length; i++) {
            if ((Souvent12a[i] == "Souvent") || (Souvent12a[i] == "Très souvent")) { compte = compte + 1 }
        }
        if (compte >= 2) { score12a = 0 }
        if (compte == 1) { score12a = 1 }
        if (compte == 0) { score12a = 2 }


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
                        onPress={() => this.props.navigation.navigate(("Infos 12b"))}
                        style={{ alignSelf: 'center', position: 'absolute', top: 85, zIndex: 5 }}>

                        <FontAwesome5 name="info-circle" size={30} />


                    </Pressable>


                    <Text style={{ fontSize: 16, fontStyle: 'italic', left: -140, top: -10, position: 'relative' }}>{'12b'} / {12}</Text>


                    <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 80, fontSize: 40 }}>{'                               '}</Text>

                    <View style={styles2.container}>

                        <Text
                            style={styles.text2}>
                            {"Qu’ils soient industriels ou artisanaux, ces produits sont salés et/ou gras. Les consommez-vous (choisir une seule réponse par ligne) :\n"}
                        </Text>


                        <Text //1
                            style={styles.text9}>
                            {"Hamburgers"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1()

                            rep12b1 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2()

                            rep12b1 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3()

                            rep12b1 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4()

                            rep12b1 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5()

                            rep12b1 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5 }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>

                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>

                        <Text //2
                            style={styles.text9}>
                            {"\nSandwiches"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1b()

                            rep12b2 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2b()

                            rep12b2 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3b()

                            rep12b2 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4b()

                            rep12b2 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5b()

                            rep12b2 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5b }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>



                        <Text //3
                            style={styles.text9}>
                            {"\nKebabs"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1c()

                            rep12b3 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1c }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2c()

                            rep12b3 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2c }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {

                            this.onButtonPress3c()

                            rep12b3 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3c }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4c()

                            rep12b3 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4c }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5c()

                            rep12b3 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5c }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>



                        <Text //4
                            style={styles.text9}>
                            {"\nPizzas"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1d()

                            rep12b4 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1d }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2d()

                            rep12b4 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2d }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3d()

                            rep12b4 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3d }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4d()

                            rep12b4 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4d }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5d()

                            rep12b4 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5d }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Pas du tout"}</Text>
                        </Pressable>


                        <Text style={{ textDecorationLine: 'underline', position: 'relative', fontSize: 20, alignSelf: 'center', marginTop: 10 }}>{'                                                              '}</Text>


                        <Text //5
                            style={styles.text9}>
                            {"\nFeuilletés / friands / tartes salées"}
                        </Text>

                        <Pressable onPress={() => {
                            this.onButtonPress1e()

                            rep12b5 = "Très souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor1e }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Très souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress2e()

                            rep12b5 = "Souvent"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor2e }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Souvent"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress3e()

                            rep12b5 = "Parfois"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor3e }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Parfois"}</Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            this.onButtonPress4e()

                            rep12b5 = "Rarement"
                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor4e }]}
                        >
                            <Text style={[styles2.text, { color: 'black' }]}>{"Rarement"}</Text>
                        </Pressable>



                        <Pressable onPress={() => {
                            this.onButtonPress5e()

                            rep12b5 = "Pas du tout"

                        }}
                            style={[styles2.button, { backgroundColor: this.state.buttonColor5e }]}
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
                            onPress={"Recommandations 12b"}>
                        </StyledButton>



                        <Pressable
                            style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                            onPress={() => {
                                this.props.navigation.navigate('Question 12c', {
                                    score1,
                                    rep1,
                                    score2,
                                    rep2,
                                    score3,
                                    rep3,
                                    score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b
                                    , score10, rep10, score11, rep11, score11b, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6, rep12a1, rep12a2, rep12a3, rep12a4, rep12a5, rep12a6, rep12a7,
                                    rep12b1, rep12b2, rep12b3, rep12b4, rep12b5, score12a



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
export default Question12b;




