import { Text, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton3 from '../../components/StyledButton/StyleButton3';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Questions from './Question1';


const Question1 = () => {
    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)



    return (
        <SafeAreaView style={styles.container}>
            <Questions
                Infos="Infos 1"
                Recommandations="Recommendations 1"
                Numéro={1}
                Suivant="Question 2"
                Question="Pensez vous manger :"
                Catégorie="Fruits et Légumes"
                r1={"Beaucoup moins de 5 fruits et légumes par jour \n\t(je n’en consomme pas tous les jours / jamais)"}
                r2="Un peu moins de 5 fruits et légumes par jour"
                r3="Environ 5 fruits et légumes par jour"
                r4="Un peu plus de 5 fruits et légumes par jour"
                r5="Beaucoup plus de 5 fruits et légumes par jour"
            />

        </SafeAreaView>


    )


}


export default Question1