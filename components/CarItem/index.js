import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const Item = (props) => {

    const { name, name2, tagline, image } = props;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}>

            </ImageBackground>

            <View style={styles.titles}>

                <Text style={styles.title}>{name}
                    <Text style={styles.innerText}>{name2}</Text>
                </Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>

                <StyledButton
                    type="primary"
                    content={"Questionnaire"}
                    onPress={() => {
                        console.warn(data => "Questionnaire was pressed");
                    }}>

                </StyledButton>
                <StyledButton type="secondary"
                    content={"À propos"}
                    onPress={() => {
                        console.warn(data => "About us was pressed");
                    }}>

                </StyledButton>

            </View>


        </View >
    );
};
export default Item;