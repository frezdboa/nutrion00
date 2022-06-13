
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Questions from '../Questions1/Question1';


const Question11 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>


            {<Questions
                Infos="Infos 11"
                Recommandations="Recommandations 11"
                Numéro={11}
                Suivant="Question 12"
                Question="Pensez vous manger :"
                Catégorie=""
                r1=""
                r2=""
                r3=""
                r4=""
                r5=""

            />}


        </SafeAreaView>
    )
}


export default Question11