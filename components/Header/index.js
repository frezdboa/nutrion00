import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                //logo :
                source={require('../../assets/images/Apple.jpg')}></Image>


        </View>
    );
};
export default Header;