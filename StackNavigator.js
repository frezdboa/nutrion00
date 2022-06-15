import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home2 from './Screens2/Home/Home2';
import About from './Screens2/About/About';
import Confidentialité from './Screens2/Confidentialité/Confidentialité';
import Consignes from './Screens2/Consignes/Consignes';
import { FontAwesome5 } from '@expo/vector-icons';

import { Quiz } from './quiz/screens';
import Page2 from './Screens2/page2/Page2';

import Question1 from './Screens2/Questions1/Question';
import Infos1 from './Screens2/Questions1/Infos';
import Recommendations1 from './Screens2/Questions1/Recommendations';

import Question2 from './Screens2/Question2/Question';
import Infos2 from './Screens2/Question2/Infos';
import Recommandations2 from './Screens2/Question2/Recommendations';

import Question3 from './Screens2/Question3/Question';
import Recommandations3 from './Screens2/Question3/Recommendations';
import Infos3 from './Screens2/Question3/Infos';

import Question4 from './Screens2/Question4/Question';
import Recommandations4 from './Screens2/Question4/Recommendations';
import Infos4 from './Screens2/Question4/Infos';

import Question5 from './Screens2/Question5/Question';
import Recommandations5 from './Screens2/Question5/Recommendations';
import Infos5 from './Screens2/Question5/Infos';

import Question6 from './Screens2/Question6/Question';
import Recommandations6 from './Screens2/Question6/Recommendations';
import Infos6 from './Screens2/Question6/Infos';

import Question7 from './Screens2/Question7/Question';
import Recommandations7 from './Screens2/Question7/Recommendations';
import Infos7 from './Screens2/Question7/Infos';

import Question8 from './Screens2/Question8/Question';
import Recommandations8 from './Screens2/Question8/Recommendations';
import Infos8 from './Screens2/Question8/Infos';

import Question9 from './Screens2/Question9/Question';
import Recommandations9 from './Screens2/Question9/Recommendations';
import Infos9 from './Screens2/Question9/Infos';

import Question10 from './Screens2/Question10/Question';
import Recommandations10 from './Screens2/Question10/Recommendations';
import Infos10 from './Screens2/Question10/Infos';

import Question11 from './Screens2/Question11/Question';
import Recommandations11 from './Screens2/Question11/Recommendations';
import Infos11 from './Screens2/Question11/Infos';

import Question12 from './Screens2/Question12/Question';
import Recommandations12 from './Screens2/Question12/Recommendations';
import Infos12 from './Screens2/Question12/Infos';





const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Stack.Navigator screenOptions={screenOptions}>

            <Stack.Group >
                <Stack.Screen name="Menu" component={Home2} options={{ headerShown: false }} />

                <Stack.Screen name="À propos" component={About} options={{}} />

                <Stack.Screen name="Page2" component={Page2} options={{ headerTitle: '' }} />

                <Stack.Screen name="Confidentialité" component={Confidentialité} />

                <Stack.Screen name="Consignes" component={Consignes} options={{}} />




                <Stack.Screen name="Question 1" component={Question1} options={{}} />
                <Stack.Screen name="Recommendations 1" component={Recommendations1} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 1" component={Infos1} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 2" component={Question2} options={{}} />
                <Stack.Screen name="Recommandations 2" component={Recommandations2} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 2" component={Infos2} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 3" component={Question3} options={{}} />
                <Stack.Screen name="Recommandations 3" component={Recommandations3} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 3" component={Infos3} options={{ headerTitle: 'Informations' }} />


                <Stack.Screen name="Question 4" component={Question4} options={{}} />
                <Stack.Screen name="Recommandations 4" component={Recommandations4} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 4" component={Infos4} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 5" component={Question5} options={{}} />
                <Stack.Screen name="Recommandations 5" component={Recommandations5} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 5" component={Infos5} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 6" component={Question6} options={{}} />
                <Stack.Screen name="Recommandations 6" component={Recommandations6} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 6" component={Infos6} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 7" component={Question7} options={{}} />
                <Stack.Screen name="Recommandations 7" component={Recommandations7} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 7" component={Infos7} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 8" component={Question8} options={{}} />
                <Stack.Screen name="Recommandations 8" component={Recommandations8} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 8" component={Infos8} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 9" component={Question9} options={{}} />
                <Stack.Screen name="Recommandations 9" component={Recommandations9} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 9" component={Infos9} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 10" component={Question10} options={{}} />
                <Stack.Screen name="Recommandations 10" component={Recommandations10} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 10" component={Infos10} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 11" component={Question11} options={{}} />
                <Stack.Screen name="Recommandations 11" component={Recommandations11} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 11" component={Infos11} options={{ headerTitle: 'Informations' }} />

                <Stack.Screen name="Question 12" component={Question12} options={{}} />
                <Stack.Screen name="Recommandations 12" component={Recommandations12} options={{ headerTitle: 'Recommandations' }} />
                <Stack.Screen name="Infos 12" component={Infos12} options={{ headerTitle: 'Informations' }} />


                <Stack.Screen name="Quiz" component={Quiz} options={{ headerTitle: 'Quiz' }} />



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
    headerBackImageSource: require('./assets/images/backk.png'),


};



export default StackNavigator;