import { Text, Pressable, View, Button, Image } from 'react-native'
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





var score1;
var rep1;


class Question1 extends Component {
    constructor() {
        super()


    }

    render() {

        return (


            <SafeAreaView style={styles.container2}>

                <Text
                    style={styles.text5}>
                    "Fruits et Légumes"
                </Text>



                <Pressable
                    onPress={() => this.props.navigation.navigate(("Infos 1"))}
                    style={{ alignSelf: 'center', position: 'absolute', top: 130, zIndex: 5 }}>

                    <FontAwesome5 name="info-circle" size={30} />


                </Pressable>

                <Text style={{ textDecorationLine: 'underline', position: 'absolute', top: 135, fontSize: 40 }}>{'                               '}</Text>





                <Text style={{ fontSize: 16, fontStyle: 'italic', left: 20, top: 135, position: 'absolute' }}>{1} / {12}</Text>




                <View style={styles2.container}>

                    <Text
                        style={styles.text2}>
                        {"Pensez-vous manger :"}
                    </Text>

                    <Pressable onPress={() => {
                        score1 = 0
                        rep1 = "1.Beaucoup moins de 5 fruits et légumes par jour (je n’en consomme pas tous les jours / jamais)"


                    }}
                        style={[styles2.button]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins de 5 fruits et légumes par jour (je n’en consomme pas tous les jours / jamais)"}</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        score1 = 1
                        rep1 = "1.Un peu moins de 5 fruits et légumes par jour"

                    }}
                        style={[styles2.button]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu moins de 5 fruits et légumes par jour"}</Text>
                    </Pressable>





                    <Pressable onPress={() => {
                        score1 = 2
                        rep1 = "1.Environ 5 fruits et légumes par jour"

                    }}
                        style={[styles2.button]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Environ 5 fruits et légumes par jour"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score1 = 2
                        rep1 = "1.Un peu plus de 5 fruits et légumes par jour"

                    }}
                        style={[styles2.button]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Un peu plus de 5 fruits et légumes par jour"}</Text>
                    </Pressable>



                    <Pressable onPress={() => {
                        score1 = 2
                        rep1 = "1.Beaucoup plus de 5 fruits et légumes par jour"

                    }}
                        style={[styles2.button]}
                    >
                        <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup plus de 5 fruits et légumes par jour"}</Text>
                    </Pressable>


                </View>


                <View style={styles.container3}>

                    <StyledButton
                        type="primary"
                        content={"recommandations"}
                        // "Recommendations 1"
                        onPress={"Recommendations 1"}>
                    </StyledButton>



                    <Pressable
                        style={[styles3.button, { backgroundColor: 'rgba(0,0,0,0.8)' }]}

                        onPress={() => {
                            this.props.navigation.navigate('Question 2', {
                                score1,
                                rep1,

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
export default Question1;
