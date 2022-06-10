import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home2 from './Screens2/Home/Home2';
import About from './Screens2/About/About';
import Confidentialité from './Screens2/Confidentialité/Confidentialité';
import Consignes from './Screens2/Consignes/Consignes';

import Question1 from './Screens2/Questions1/Question';
import Infos1 from './Screens2/Questions1/Infos';
import Recommendations1 from './Screens2/Questions1/Recommendations';
import Question2 from './Screens2/Question2/Question';
import Infos2 from './Screens2/Question2/Infos';
import Recommandations2 from './Screens2/Question2/Recommendations';




const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>

            <Stack.Group>
                <Stack.Screen name="Menu" component={Home2} options={{ headerShown: false }} />

                <Stack.Screen name="À propos" component={About} options={{}} />

                <Stack.Screen name="Confidentialité" component={Confidentialité} />

                <Stack.Screen name="Consignes" component={Consignes} options={{}} />

                <Stack.Screen name="Question 1" component={Question1} options={{}} />
                <Stack.Screen name="Recommendations 1" component={Recommendations1} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 1" component={Infos1} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 2" component={Question2} options={{}} />
                <Stack.Screen name="Recommandations 2" component={Recommandations2} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 2" component={Infos2} options={{ headerTitle: 'Informations' }} />



            </Stack.Group>

            {/* <Stack.Group screenOptions={{ presentation: 'modal' }} >
                <Stack.Screen name="Modal" component={Modal} />
            </Stack.Group> */}
        </Stack.Navigator >
    );
};

const screenOptions = {

    headerTransparent: true,
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 22, fontWeight: 'bold' },



};



export default StackNavigator;