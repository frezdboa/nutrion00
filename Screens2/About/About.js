import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const About = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.text}>{'Depuis quelques dizaines d’années, les études scientifiques évaluant l’impact de l’alimentation sur la santé se multiplient. Ainsi, certains groupes d’aliments ont montré un impact positif ou négatif sur de nombreuses maladies chroniques comme les maladies cardio-vasculaires, l’obésité, le diabète, les cancers, l’ostéoporose, la maladie d’Alzheimer, etc. \n\nCe questionnaire alimentaire est basé sur les recommandations du « Programme National Nutrition Santé ». Ces recommandations ne sont pas des normes absolues qu’il faudrait atteindre à chaque repas ; ce sont simplement des repères vers lesquels vous pouvez tendre pour améliorer votre nutrition. Se rapprocher même un peu des différents repères est bon pour votre santé.\n\nUne fois rempli, ce questionnaire pourra servir de support à une discussion avec votre médecin, et vous permettre, si vous le souhaitez, de choisir un ou plusieurs axes de changements pour améliorer votre alimentation.'}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffe0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 15,
        fontFamily: 'Roboto2',
        color: 'black',
        margin: 24,
        textAlign: 'left',
        marginTop: 16,
        lineHeight: 22,
    },

});


export default About