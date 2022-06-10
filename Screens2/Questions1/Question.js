import { Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';


const Question1 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>


            <Pressable
                onPress={() => navigation.navigate('Infos 1')}
                style={{ alignSelf: 'center', marginBottom: -20, marginVertical: 40 }}>

                <FontAwesome5 name="info-circle" size={40} />

                <Text></Text>

            </Pressable>

            <Text
                style={styles.text2}>
                {"Pensez vous manger :"}
            </Text>


            <StyledButton3
                type="primary"
                content={"1. Beaucoup moins de 5 fruits et légumes par jour \n\t(je n’en consomme pas tous les jours)"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.4)">
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={"2 - Un peu moins de 5 fruits et légumes par jour"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)">
            </StyledButton3>

            <StyledButton3
                type="primary"
                content={"3 - Environ 5 fruits et légumes par jour"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.9)">
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={"4 - Un peu plus de 5 fruits et légumes par jour"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.9)">

            </StyledButton3>



            <StyledButton3
                type="primary"
                content={"5 - Beaucoup plus de 5 fruits et légumes par jour"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.9)">
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
}


export default Question1