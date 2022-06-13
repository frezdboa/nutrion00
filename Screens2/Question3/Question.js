import { Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import Questions from '../Questions1/Question1';


const Question3 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>


            {<Questions
                Infos="Infos 3"
                Recommandations="Recommandations 3"
                Numéro={3}
                Suivant="Question 4"
                Question={"Pensez-vous manger \ndes légumes secs :"}
                Catégorie="Légumes secs"
                r1="Beaucoup moins souvent que deux fois par semaine (je n’en consomme pas toutes les semaines/ jamais)"
                r2="Un peu moins souvent que deux fois par semaine"
                r3="Environ deux fois par semaine"
                r4="Un peu plus souvent que deux fois par semaine"
                r5="Beaucoup plus souvent que deux fois par semaine"

            />}


        </SafeAreaView>
    )
}


export default Question3