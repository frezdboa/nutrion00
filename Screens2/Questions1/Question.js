import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import styles2 from './style2';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Questions from './Question1';
import styles3 from '../../components/StyledButton/style';





var score, score1;
var num;


class Question1 extends Component {
    constructor() {
        super()

        //     this.state = {
        //         black: true
        //     }
    }

    // changeColor() {
    //     this.setState({ black: !this.state.black })
    //}




    render() {

        //let btn_class = this.state.black ? 'white' : 'black';



        return (



            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "Fruits et Légumes"
                </Text>



                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 1"))}
                    style={{ alignSelf: 'center', marginBottom: -20, marginVertical: 40, top: 35 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text>{''}</Text>



                <View>
                    {/*Question Counter*/}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>

                        <Text style={{ fontSize: 16, marginRight: 4, fontWeight: 'bold', left: -140, opacity: 0.6, top: 15 }}>{1} / {12}</Text>
                    </View>
                </View>

                <Text
                    style={styles.text2}>
                    {"Pensez vous manger :"}
                </Text>


                <View style={styles2.container}>
                    <Pressable onPress={() => {
                        score = 0
                        num = 1

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.6)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins de 5 fruits et légumes par jour (je n’en consomme pas tous les jours / jamais)"}</Text>
                    </Pressable>


                </View>

                <View style={styles2.container}>
                    <Pressable onPress={() => {
                        score = 1
                        num = 3

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.6)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins de 5 fruits et légumes par jour"}</Text>
                    </Pressable>


                </View>

                <View style={styles2.container}>
                    <Pressable onPress={() => {
                        score = 2
                        num = 3

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.6)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ 5 fruits et légumes par jour"}</Text>
                    </Pressable>


                </View>

                <View style={styles2.container}>
                    <Pressable onPress={() => {
                        score = 2
                        num = 4

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.6)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus de 5 fruits et légumes par jour"}</Text>
                    </Pressable>


                </View>

                <View style={styles2.container}>
                    <Pressable onPress={() => {
                        score = 2
                        num = 5

                    }}
                        style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.6)" }]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus de 5 fruits et légumes par jour"}</Text>
                    </Pressable>


                </View>


                <Text>{"\n"}</Text>

                <StyledButton
                    type="primary"
                    content={"recommandations"}
                    // "Recommendations 1"
                    onPress={"Recommendations 1"}>
                </StyledButton>


                <View style={styles3.container}>
                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 2', {
                                postId: score,
                                question: num,
                                postId2: score1,

                            });
                        }}
                    >
                        <Text style={[styles3.text, { color: 'white' }]}>{'suivant'}</Text>
                    </Pressable>

                </View>

                <Text>{"\n\n\n"}</Text>


            </SafeAreaView >

        )


    }
}
export default Question1;
