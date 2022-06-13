import { Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import Questions from '../Questions1/Question1';


const Question2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>


            {<Questions
                Infos="Infos 2"
                Recommandations="Recommandations 2"
                Numéro={2}
                Suivant="Question 3"
                Question="Pensez vous manger :"
                Catégorie="Fruits à coques non salés"
                r1="Beaucoup moins d’une petite poignée par jour de fruits à coque non salés (je n’en consomme pas toutes les semaines / jamais)"
                r2="Un peu moins d’une petite poignée par jour de fruits à coque non salés"
                r3="Environ une petite poignée par jour de fruits à coque non salés"
                r4="Un peu plus d’une petite poignée par jour de fruits à coque non salés"
                r5="Beaucoup plus d’une petite poignée par jour de fruits à coque non salés"

            />}


        </SafeAreaView>
    )
}


export default Question2