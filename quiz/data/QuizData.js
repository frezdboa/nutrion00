

import { View, Text } from 'react-native'
import React from 'react'

const data = [
    {
        question: "Concernant les fruits et légumes, pensez vous qu'il faut en manger :",
        options: ["Beaucoup moins de 5 par jour ", "Un peu moins de 5 par jour", "Environ 5 par jour", "Un peu plus de 5 par jour", "Beaucoup plus de 5 par jour"],
        correct_option: "Environ 5 par jour",
        option1: "Un peu plus de 5 par jour",
        option2: "Beaucoup plus de 5 par jour",
    },
    {
        question: "Concernant les fruits à coque non salés, pensez vous qu'il faut en manger :",
        options: ["Beaucoup moins d’une petite poignée par jour "
            , "Un peu moins d’une petite poignée de 5 par jour"
            , "Environ une petite poignée par jour "
            , "Un peu plus d’une petite poignée par jour "
            , "Beaucoup plus d’une petite poignée par jour "],
        correct_option: "Environ une petite poignée par jour ",

    },
    {
        question: "Concernant les légumes secs, pensez vous qu'il faut en manger :",
        options: ["Beaucoup moins souvent que deux fois par semaine"
            , 'Un peu moins souvent que deux fois par semaine'
            , 'Environ deux fois par semaine'
            , 'Un peu plus souvent que deux fois par semaine'
            , 'Beaucoup plus souvent que deux fois par semaine'],
        correct_option: 'Environ deux fois par semaine',
        option1: 'Un peu plus souvent que deux fois par semaine',
        option2: 'Beaucoup plus souvent que deux fois par semaine',

    },

]

export default data