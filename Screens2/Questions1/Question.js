import { Text, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Question1 = () => {
    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)



    return (
        <SafeAreaView style={styles.container}>


            <Pressable
                onPress={() => navigation.navigate('Infos 1')}
                style={{ alignSelf: 'center', marginBottom: -20, marginVertical: 40 }}>

                <FontAwesome5 name="info-circle" size={40} />


            </Pressable>

            <Text>{''}</Text>



            <View>
                {/*Question Counter*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}>

                    <Text style={{ fontSize: 18, marginRight: 4, fontWeight: 'bold', left: -140, opacity: 0.6 }}>{currentQuestionIndex + 1} / {12}</Text>
                </View>
            </View>

            <Text
                style={styles.text2}>
                {"Pensez vous manger :"}
            </Text>


            <StyledButton3
                type="primary"
                content={"Beaucoup moins de 5 fruits et légumes par jour \n\t(je n’en consomme pas tous les jours)"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.4)"
                number='1'
            >
            </StyledButton3>


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
                backgroundColor="hsla(120,  80%, 50%, 0.9)"
                number='3'>
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={"Un peu plus de 5 fruits et légumes par jour"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.9)"
                number='4'>

            </StyledButton3>



            <StyledButton3
                type="primary"
                content={"Beaucoup plus de 5 fruits et légumes par jour"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.9)"
                number='5'>
            </StyledButton3>

            <Text>{"\n\n"}</Text>

            <StyledButton
                type="primary"
                content={"recommandations"}
                onPress="Recommendations 1">
            </StyledButton>

            <StyledButton
                type="secondary"
                content={"suivant"}
                onPress="Question 2">
            </StyledButton>



            <Text>{"\n\n"}</Text>


        </SafeAreaView>

    )

    const renderNextButton = () => {
        if (Test) {
            return (
                <TouchableOpacity>
                    <Text style={{ fontSize: 30 }}>Next</Text>
                </TouchableOpacity>
            )
        }
        else {
            return null
        }
    }
}


export default Question1