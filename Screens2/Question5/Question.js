
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Questions from '../Questions1/Question1';


const Question5 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>


            {<Questions
                Infos="Infos 5"
                Recommandations="Recommandations 5"
                Numéro={5}
                Suivant="Question 6"
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


export default Question5