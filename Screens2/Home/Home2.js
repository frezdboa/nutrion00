import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import StyledButton from '../../components/StyledButton';

const Home2 = (props) => {

    const { name = 'Nutr', name2 = 'ion', tagline = 'Votre partenaire santé et nutrition', image = require('../../assets/images/nourriture3.jpg') } = props;

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}>

            </ImageBackground>

            <View style={styles.titles}>


                <Text style={styles.title}>{name}
                    <Text style={styles.innerText}>{name2}</Text>
                </Text>

            </View>


            <View style={styles.container}>
                <Image style={styles.logo}
                    //logo :
                    source={require('../../assets/images/logo.png')}>

                </Image>

                <Text style={styles.subtitle}>{tagline}</Text>


            </View>

            <View style={styles.buttonsContainer}>


                <StyledButton
                    type="primary"
                    content={"Questionnaire"}
                    onPress="Page2">
                </StyledButton>


                <StyledButton type="secondary"
                    content={"À propos"}
                    onPress="À propos">
                </StyledButton>



            </View>


        </SafeAreaView >
    );
};

export default Home2