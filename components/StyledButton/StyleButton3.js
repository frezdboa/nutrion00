import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style2';
import { useNavigation } from '@react-navigation/native';


const StyledButton3 = props => {

    const { style, content, onPress, backgroundColor, number } = props;

    //const backgroundColor = type == 'primary' ? 'hsla(120,  80%, 50%, 0.8)' : 'hsla(120,  80%, 50%, 0.8)'


    const navigation = useNavigation();
    const [Pressed, setPressed] = useState('');



    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate(onPress)}
                style={[styles.button, { backgroundColor: backgroundColor }]}

            //onPress={() => navigation.navigate(onPress)}
            //onPress={() => { set((current) => current + 1) }}
            >
                <Text style={[styles.text, { color: 'black' }]}>{content}</Text>
            </Pressable>


            {/* <Pressable
                onPress={() => {
                    setPressed((current) => current + number);
                    //navigation.navigate(onPress)
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? backgroundColor
                            : '#ffffe0',

                    },
                    styles.button
                ]}>
                {({ pressed }) => (
                    <Text style={[styles.text, { color: 'black' }]}>{Pressed}
                    </Text>

                )}
            </Pressable> */}




        </View>
    );
};

export default StyledButton3;