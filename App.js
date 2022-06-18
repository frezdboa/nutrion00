import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Item from './components/CarItem';
import Header from './components/Header';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';


export default function App() {

  const [isActive, setIsActive] = useState(false);

  const [loaded] = useFonts({ //then reload to add the font
    Roboto2: require('./assets/fonts/Roboto-BoldItalic.ttf'),
    Dancing: require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (

    // <View style={styles.container}>


    <NavigationContainer >
      <StackNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>


  );

  // </View>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(150, 50%, 20%, 0.8)',

    alignItems: 'center',
    justifyContent: 'center',
  },


});
