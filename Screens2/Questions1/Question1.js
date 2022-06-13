import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import StyledButton from '../../components/StyledButton';
import styles from './styles';

const Questions = props => {

    const { Infos, Recommandations, Question, r1, r2, r3, r4, r5, Suivant, Numéro, Catégorie } = props;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container2}>

            <Text
                style={styles.text5}>
                {Catégorie}
            </Text>


            <Pressable
                onPress={() => navigation.navigate(Infos)}
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

                    <Text style={{ fontSize: 16, marginRight: 4, fontWeight: 'bold', left: -140, opacity: 0.6, top: 15 }}>{Numéro} / {12}</Text>
                </View>
            </View>

            <Text
                style={styles.text2}>
                {Question}
            </Text>


            <StyledButton3
                type="primary"
                content={r1}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)"
                number='1'

            >
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={r2}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)"
                number='2'>
            </StyledButton3>

            <StyledButton3
                type="primary"
                content={r3}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)"
                number='3'>
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={r4}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)"
                number='4'>

            </StyledButton3>



            <StyledButton3
                type="primary"
                content={r5}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)"
                number='5'>
            </StyledButton3>

            <Text>{"\n"}</Text>

            <StyledButton
                type="primary"
                content={"recommandations"}
                // "Recommendations 1"
                onPress={Recommandations}>
            </StyledButton>

            <StyledButton
                type="secondary"
                content={"suivant"}
                onPress={Suivant}>
            </StyledButton>



            <Text>{"\n\n"}</Text>


        </SafeAreaView>


    )
}

export default Questions