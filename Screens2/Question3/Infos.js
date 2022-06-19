import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';

const Infos3 = () => {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text3}>
                {"3. Les légumes secs : lentilles, haricots secs, pois cassés, pois chiches, fèves…"}
            </Text>


        </SafeAreaView>
    )
}


export default Infos3