import { Text, Pressable, View, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles2 from '../Questions1/style2';





var score;
var num;


class Question2 extends Component {
    constructor() {
        super();

        // this.state = {
        //     black: true
        // }
    };

    // changeColor() {
    //     this.setState({ black: !this.state.black })
    // }

    render() {

        //let btn_class = this.state.black ? 'white' : 'black';

        const { postId, question, postId2 } = this.props.route.params;

        return (




            <SafeAreaView style={styles.container2}>


                <Text
                    style={styles.text5}>
                    "Fruits et Légumes"
                </Text>


                <Text>Post id is: {postId}</Text>
                <Text>Question id is: {question}</Text>
                <Text>Post id is: {postId2}</Text>


                <Pressable
                    onPress={() => navigation.navigate("Infos 1")}
                    style={{ alignSelf: 'center', marginBottom: -20, marginVertical: 40, top: 25 }}>

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

                    <TouchableOpacity

                        // className={btn_class}
                        // style={[styles2.button, { backgroundColor: btn_class }]}
                        // onClick={this.changeColor.bind(this)}



                        onPress={() => {
                            score = 3
                            num = 1
                            // this.changeColor.bind(this)
                        }}

                    // key={btn_class}
                    // style={{
                    //     borderWidth: 3,
                    //     borderColor: btn_class == false
                    //         ? 'black'
                    //         : 'white'
                    // }}
                    //style={[styles2.button, { backgroundColor: "hsla(120,  80%, 50%, 0.6)" }]}
                    >
                        <Text >{''}</Text>
                        {/* <Text style={[styles2.text, { color: 'black' }]}>{"Beaucoup moins de 5 fruits et légumes par jour \n\t(je n’en consomme pas tous les jours / jamais)"}</Text> */}

                    </TouchableOpacity>


                </View>




                {/* <StyledButton3
                    type="primary"
                    content={r1}
                    onPress="Menu"
                    backgroundColor="hsla(120,  80%, 50%, 0.6)"
                    number='1'
    
                >
                </StyledButton3> */}


                <StyledButton3
                    type="secondary"
                    content={"Un peu moins de 5 fruits et légumes par jour"}
                    onPress="Menu"
                    backgroundColor="hsla(120,  80%, 50%, 0.6)"
                    number='2'>
                </StyledButton3>

                <StyledButton3
                    type="primary"
                    content={"Environ 5 fruits et légumes par jour"}
                    onPress="Menu"
                    backgroundColor="hsla(120,  80%, 50%, 0.6)"
                    number='3'>
                </StyledButton3>


                <StyledButton3
                    type="secondary"
                    content={"Un peu plus de 5 fruits et légumes par jour"}
                    onPress="Menu"
                    backgroundColor="hsla(120,  80%, 50%, 0.6)"
                    number='4'>

                </StyledButton3>



                <StyledButton3
                    type="primary"
                    content="Beaucoup plus de 5 fruits et légumes par jour"
                    onPress="Menu"
                    backgroundColor="hsla(120,  80%, 50%, 0.6)"
                    number='5'>
                </StyledButton3>

                <Text>{"\n"}</Text>

                <StyledButton
                    type="primary"
                    content={"recommandations"}
                    // "Recommendations 1"
                    onPress={"Recommendations 1"}>
                </StyledButton>

                <Button
                    title="next"
                    onPress={() => {
                        this.props.navigation.navigate('Question 2', {
                            postId: score,


                        });
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"suivant"}
                    onPress={"Question 2"}>
                </StyledButton>

                {/* <Button
                    title="next"
                    onPress={() => {
                        this.props.navigation.navigate({ Suivant }, {
                            postId: score,
    
                        });
                    }}
                />
                <View>
                    <Button
                        title="Question à 3 point"
                        onPress={() => {
                            score = 3
    
    
                        }}
    
                    />
    
    
                </View> */}



                <Text>{"\n\n\n"}</Text>


            </SafeAreaView >

        )


    }
}
export default Question2;


// const Questio1 = () => {


//     const navigation = useNavigation();
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//     const [showNextButton, setShowNextButton] = useState(false)



//     return (
//         <SafeAreaView style={styles.container}>
//             <Questions
//                 Infos="Infos 1"
//                 Recommandations="Recommendations 1"
//                 Numéro={1}
//                 Suivant="Question 2"
//                 Question="Pensez vous manger :"
//                 Catégorie="Fruits et Légumes"
//                 r1={"Beaucoup moins de 5 fruits et légumes par jour \n\t(je n’en consomme pas tous les jours / jamais)"}
//                 r2="Un peu moins de 5 fruits et légumes par jour"
//                 r3="Environ 5 fruits et légumes par jour"
//                 r4="Un peu plus de 5 fruits et légumes par jour"
//                 r5="Beaucoup plus de 5 fruits et légumes par jour"
//             />

//         </SafeAreaView>


//     )


// }


// export default Questio1






// const Question2 = () => {
//     const navigation = useNavigation();


//     return (
//         <SafeAreaView style={styles.container}>


//             {<Questions
//                 Infos="Infos 2"
//                 Recommandations="Recommandations 2"
//                 Numéro={2}
//                 Suivant="Question 3"
//                 Question="Pensez vous manger :"
//                 Catégorie="Fruits à coques non salés"
//                 r1="Beaucoup moins d’une petite poignée par jour de fruits à coque non salés (je n’en consomme pas toutes les semaines / jamais)"
//                 r2="Un peu moins d’une petite poignée par jour de fruits à coque non salés"
//                 r3="Environ une petite poignée par jour de fruits à coque non salés"
//                 r4="Un peu plus d’une petite poignée par jour de fruits à coque non salés"
//                 r5="Beaucoup plus d’une petite poignée par jour de fruits à coque non salés"

//             />}



//         </SafeAreaView>
//     )
// }


// export default Question2