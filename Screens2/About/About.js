import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const About = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>{'Ce questionnaire alimentaire est basé sur les recommandations du « Programme National Nutrition Santé ». \nCes recommandations ne sont pas des normes absolues qu’il faudrait atteindre à chaque repas ; ce sont simplement des repères vers lesquels vous pouvez tendre pour améliorer votre nutrition. Se rapprocher même un peu des différents repères est bon pour votre santé.\n\nUne fois rempli, ce questionnaire pourra servir de support à une discussion avec votre médecin, et vous permettre, si vous le souhaitez, de choisir un ou plusieurs axes de changements pour améliorer votre alimentation.'}</Text>

            <Image
                source={require('../../quiz/assets/images/fruits.png')}
                style={{
                    width: 500,
                    height: 300,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'center',
                    opacity: 0.1,


                }}
                resizeMode={'contain'}
            />
            <Image
                source={require('../../quiz/assets/images/légumes.png')}
                style={{
                    width: 500,
                    height: 350,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 330,
                    alignSelf: 'center',
                    opacity: 0.1,

                }}
                resizeMode={'contain'}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 19,
        color: 'black',
        margin: 24,
        textAlign: 'left',
        marginTop: 16,
        lineHeight: 24,
        fontWeight: '400',
    },

});


export default About