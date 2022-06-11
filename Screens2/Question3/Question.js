import { Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';


const Question3 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>


            <Pressable
                onPress={() => navigation.navigate('Infos 3')}
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
                content={"Beaucoup moins d’une petite poignée par jour de fruits à coque non salés (je n’en consomme pas toutes les semaines/ jamais)"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.4)">
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={"Un peu moins d’une petite poignée par jour de fruits à coque non salés"}
                backgroundColor="hsla(120,  80%, 50%, 0.6)">
            </StyledButton3>

            <StyledButton3
                type="primary"
                content={"Environ une petite poignée par jour de fruits à coque non salés"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.9)">
            </StyledButton3>


            <StyledButton3
                type="secondary"
                content={"Un peu plus d’une petite poignée par jour de fruits à coque non salés"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.6)">

            </StyledButton3>

            <StyledButton3
                type="primary"
                content={"Beaucoup plus d’une petite poignée par jour de fruits à coque non salés"}
                onPress="Menu"
                backgroundColor="hsla(120,  80%, 50%, 0.4)">
            </StyledButton3>

            <Text>{"\n\n"}</Text>

            <StyledButton
                type="primary"
                content={"recommandations"}
                onPress="Recommandations 3">
            </StyledButton>

            <StyledButton
                type="secondary"
                content={"suivant"}
                onPress="Menu">
            </StyledButton>



            <Text>{"\n\n"}</Text>


        </SafeAreaView>
    )
}


export default Question3