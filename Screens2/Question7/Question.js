
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Questions from '../Questions1/Question1';


const Question7 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>


            {<Questions
                Infos="Infos 7"
                Recommandations="Recommandations 7"
                Numéro={7}
                Suivant="Question 8"
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


export default Question7