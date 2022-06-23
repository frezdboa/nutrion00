import { Text, Pressable, View, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useState, Component } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton from '../../components/StyledButton';

var background1, background2, background3, background4, background5, background6, background6b, background7, background7b, background8, background9, background9b, background10, background11, background11b, background12a, background12b, background12c1, background12c2, background12c3;
var score12c3 = "indéfini";

class Résultats extends Component {
    constructor() {
        super()

    }
    render() {


        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b
            , score10, rep10, score11, rep11, score11b, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6,
            rep12a1, rep12a2, rep12a3, rep12a4, rep12a5, rep12a6, rep12a7,
            rep12b1, rep12b2, rep12b3, rep12b4, rep12b5, score12a, score12b,
            rep12c1, rep12c2, rep12c31, rep12c32, rep12c33, rep12c34, rep12c35, rep12c36, rep12c37, rep12c38, rep12c39, rep12c310, score12c1, score12c2 } = this.props.route.params;


        let Souvent12c = [rep12c31, rep12c32, rep12c33, rep12c34, rep12c35, rep12c36, rep12c37, rep12c38, rep12c39]

        //calcule score de la question 12b
        var compte = 0;
        for (var i = 0; i < Souvent12c.length; i++) {
            if (Souvent12c[i] != " ") { compte = compte + 1 }
        }
        if (compte >= 3) { score12c3 = 0 }
        if (compte == 1 || compte == 2) { score12c3 = 1 }

        if (rep12c310 != " ") { score12c3 = 2 }




        var score1v = score1, score2v = score2, score3v = score3, score4v = score4, score5v = score5, score6v = score6, score6bv = score6b, score7v = score7, score7bv = score7, score8v = score8, score9v = score9, score9bv = score9b, score10v = score10, score11v = score11, score11bv = score11b, score12av = score12a, score12bv = score12b, score12c1v = score12c1, score12c2v = score12c2, score12c3v = score12c3;

        if (score1v == "indéfini") { score1v = 0 }
        if (score2v == "indéfini") { score2v = 0 }
        if (score3v == "indéfini") { score3v = 0 }
        if (score4v == "indéfini") { score4v = 0 }
        if (score5v == "indéfini") { score5v = 0 }
        if (score6v == "indéfini") { score6v = 0 }
        if (score6bv == "indéfini") { score6bv = 0 }
        if (score7v == "indéfini") { score7v = 0 }
        if (score7bv == "indéfini") { score7bv = 0 }
        if (score8v == "indéfini") { score8v = 0 }
        if (score9v == "indéfini") { score9v = 0 }
        if (score9bv == "indéfini") { score9bv = 0 }
        if (score10v == "indéfini") { score10v = 0 }
        if (score11v == "indéfini") { score11v = 0 }
        if (score11bv == "indéfini") { score11bv = 0 }
        if (score12av == "indéfini") { score12av = 0 }
        if (score12bv == "indéfini") { score12bv = 0 }
        if (score12c1v == "indéfini") { score12c1v = 0 }
        if (score12c2v == "indéfini") { score12c2v = 0 }
        if (score12c3v == "indéfini") { score12c3v = 0 }

        //score final

        let indef = [score1, score2, score3, score4, score5, score6, score6b, score7, score7b, score8, score9, score9b, score10, score11, score11b, score12a, score12b, score12c1, score12c2, score12c3]
        var compte2 = 0;
        for (var i = 0; i < indef.length; i++) {
            if (indef[i] == "indéfini") { compte2 = compte2 + 1 }
        }

        var scoreTotal = 40 - compte2 * 2;
        var scoreFinal = score1v + score2v + score3v + score4v + score5v + score6v + score6bv + score7v + score7bv + score8v + score9v + score9bv + score10v + score11v + score11bv + score12av + score12bv + score12c1v + score12c2v + score12c3v;



        if (score2 == 0) { background2 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score2 == 1) { background2 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score2 == 2) { background2 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background2 = 'white' }

        if (score1 == 0) { background1 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score1 == 1) { background1 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score1 == 2) { background1 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background1 = 'white' }

        if (score3 == 0) { background3 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score3 == 1) { background3 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score3 == 2) { background3 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background3 = 'white' }

        if (score4 == 0) { background4 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score4 == 1) { background4 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score4 == 2) { background4 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background4 = 'white' }

        if (score5 == 0) { background5 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score5 == 1) { background5 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score5 == 2) { background5 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background5 = 'white' }

        if (score6 == 0) { background6 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score6 == 1) { background6 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score6 == 2) { background6 = 'hsla(120, 100%, 50%, 0.7)' }
        else if (score6 == "indéfini") { background6 = 'white' }
        else { background6 = 'white' }

        if (score6b == 0) { background6b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score6b == 1) { background6b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score6b == 2) { background6b = 'hsla(120, 100%, 50%, 0.7)' }
        else { background6b = 'white' }

        if (score7 == 0) { background7 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score7 == 1) { background7 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score7 == 2) { background7 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background7 = 'white' }

        if (score7b == 0) { background7b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score7b == 1) { background7b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score7b == 2) { background7b = 'hsla(120, 100%, 50%, 0.7)' }
        else { background7b = 'white' }

        if (score8 == 0) { background8 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score8 == 1) { background8 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score8 == 2) { background8 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background8 = 'white' }

        if (score9 == 0) { background9 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score9 == 1) { background9 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score9 == 2) { background9 = 'hsla(120, 100%, 50%, 0.7)' }
        else if (score9 == "indéfini") { background9 = 'white' }
        else { background9 = 'white' }

        if (score9b == 0) { background9b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score9b == 1) { background9b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score9b == 2) { background9b = 'hsla(120, 100%, 50%, 0.7)' }
        else if (score9b == "indéfini") { background9b = 'white' }
        else { background9b = 'white' }

        if (score10 == 0) { background10 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score10 == 1) { background10 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score10 == 2) { background10 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background10 = 'white' }

        if (score11 == 0) { background11 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score11 == 1) { background11 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score11 == 2) { background11 = 'hsla(120, 100%, 50%, 0.7)' }
        else if (score11 == "indéfini") { background11 = 'white' }
        else { background11 = 'white' }

        if (score11b == 0) { background11b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score11b == 1) { background11b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score11b == 2) { background11b = 'hsla(120, 100%, 50%, 0.7)' }
        else { background11b = 'white' }

        if (score12a == 0) { background12a = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score12a == 1) { background12a = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score12a == 2) { background12a = 'hsla(120, 100%, 50%, 0.7)' }
        else { background12a = 'white' }

        if (score12b == 0) { background12b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score12b == 1) { background12b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score12b == 2) { background12b = 'hsla(120, 100%, 50%, 0.7)' }
        else { background12b = 'white' }

        if (score12c1 == 0) { background12c1 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score12c1 == 1) { background12c1 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score12c1 == 2) { background12c1 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background12c1 = 'white' }

        if (score12c2 == 0) { background12c2 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score12c2 == 1) { background12c2 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score12c2 == 2) { background12c2 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background12c2 = 'white' }

        if (score12c3 == 0) { background12c3 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score12c3 == 1) { background12c3 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score12c3 == 2) { background12c3 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background12c3 = 'white' }

        return (

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollview}
                scrollEnabled={true}
            >


                <View style={styles.container}>

                    <Pressable
                        onPress={() => this.props.navigation.navigate(("Menu"))}
                        style={{ alignSelf: 'flex-end', zIndex: 10, right: 30, marginTop: 80, }}>

                        <FontAwesome5 name="home" size={40} />


                    </Pressable>

                    <Text style={{ fontSize: 22, fontWeight: '600', textDecorationLine: 'underline', marginTop: -55 }}>{"\nRésultats"} </Text>

                    <Text style={{ fontSize: 19, fontWeight: '300', textAlign: 'center', marginTop: 40, margin: 15, }}>{"Bravo, vous avez fini ce questionnaire ! Au quotidien et quel que soit votre mode de vie, trouvez votre façon d’avoir une alimentation plus équilibrée. Chaque petit pas compte et finit par faire une grande différence !"} </Text>

                    <Text style={{ color: '#daa520', fontSize: 22, fontWeight: '800', textAlign: 'center', marginTop: 20, margin: 15, }}>Votre score final est {scoreFinal}/{scoreTotal} !</Text>
                    <Text style={{ fontSize: 13, fontWeight: '200', textAlign: 'center', marginTop: 0, margin: 15, }}>(Pour les questions répondu)</Text>
                    <Pressable style={{ backgroundColor: background1, top: 20, width: '90%', height: 60, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"1. Fruits et Légumes"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background1, top: 20, width: '90%', height: 40, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginLeft: 5, fontWeight: '400' }}>{rep1}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background1, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginLeft: 5 }}>Score : {score1}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background2, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"2. Fruits à coque non salés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background2, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep2}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background2, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score2}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background3, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"3. Légumes secs"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background3, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep3}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background3, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score3}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background4, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"4. Les féculents complets"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background4, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep4}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background4, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score4}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background5, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"5. Les produits laitiers"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background5, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep5}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background5, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score5}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background6, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"6. La viande"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background6, top: 20, width: '90%', height: 80, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Pensez vous manger plus souvent de la volaille que d'autres viandes ?\n\n"}{rep6}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background6, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score6}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background6b, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"6b. La viande hors volaille"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background6b, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep6b}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background6b, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score6b}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background7, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"7. Le poisson"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background7, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep7}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background7, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score7}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background7b, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"7b. Le poisson gras"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background7b, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep7b}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background7b, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score7b}/2</Text></Pressable>


                    <Pressable style={{ backgroundColor: background8, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"8. La charcuterie"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background8, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep8}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background8, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score8}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background9, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"9. Les matières grasses ajoutées"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background9, top: 20, width: '90%', height: 100, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Pensez-vous que votre alimentation est trop riche en matières grasses ajoutées ?\n\n"}{rep9}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background9, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score9}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background9b, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"9b. Les matières grasses ajoutées"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background9b, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep9b}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background9b, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score9b}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background10, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"10. Les boissons sucrées"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background10, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{rep10}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background10, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score10}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background11, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"11. Les produits salés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11, top: 20, width: '90%', height: 100, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Salez-vous systématiquement les plats avant de les consommer ?\n\n"}{rep11}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score11}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"11b. Les produits salés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 45, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Biscuits apéritifs / fruits à coque salés / snacks salés :"}{rep11b1}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Plats préparés du commerce :"}{rep11b2}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Charcuterie :"}{rep11b3}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Soupes déshydratées / bouillon KUB :"}{rep11b4}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Pain :"}{rep11b5}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Fromage :"}{rep11b6}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score11b}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"12a. Les aliments gras, sucrés et ultra-transformés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Bonbons :"}{rep12a1}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Glaces :"}{rep12a2}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Chocolats / barres chocolatées :"}{rep12a3}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Gâteaux / biscuits :"}{rep12a4}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Vieinnoiseries :"}{rep12a5}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Crèmes dessert / mousse :"}{rep12a6}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Céréales sucrées du petit-déjeuner :"}{rep12a7}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12a, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score12a}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background12b, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"12b. Les aliments gras, salés et ultra-transformés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Hamburgers :"}{rep12b1}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Sandwiches :"}{rep12b2}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Kebabs :"}{rep12b3}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Pizzas :"}{rep12b4}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Feuilletés/friands/tartes salées  :"}{rep12b5}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12b, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score12b}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background12c1, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"12c. Les aliments gras, sucrées, salés et ultra-transformés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12c1, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Consommation de plats préparés du commerce : "}{rep12c1}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12c1, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score12c1}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background12c2, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"12d. Les aliments gras, sucrées, salés et ultra-transformés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12c2, top: 20, width: '90%', height: 60, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Pour choisir les produits du commerce, vous aidez-vous du Nutri-Score : "}{rep12c2}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12c2, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score12c2}/2</Text></Pressable>

                    <Pressable style={{ backgroundColor: background12c3, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"12e. Les aliments gras, sucrées, salés et ultra-transformés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12c3, top: 20, width: '90%', height: 180, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"A l'habitude de mettre sur la table : \n"}{rep12c31}{"\n"}{rep12c32}{"\n"}{rep12c33}{"\n"}{rep12c34}{"\n"}{rep12c35}{"\n"}{rep12c36}{"\n"}{rep12c37}{"\n"}{rep12c38}{"\n"}{rep12c39}{"\n"}{rep12c310}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background12c3, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}><Text style={{ marginHorizontal: 10 }}>Score : {score12c3}/2</Text></Pressable>


                    <Text style={styles.text2}>{"\n"}</Text>


                    {/* <Text style={styles.text2}>{"Un Quiz sur l'alimentation est aussi disponible si vous souhaitez tester vos connaissances  !"}</Text>


                    <StyledButton
                        type="primary"
                        content={"Faire le Quiz !"}
                        onPress="Quiz">
                    </StyledButton> */}

                    <StyledButton
                        type="secondary"
                        content={"Menu"}
                        // "Recommendations 1"
                        onPress={"Menu"}>
                    </StyledButton>

                    <Text>{"\n\n"}</Text>

                </View>

            </ScrollView>

        )


    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
        alignItems: 'center',

    },

    text1: {
        fontSize: 20,
        fontFamily: 'Roboto2',
        color: 'black',
        margin: 24,
        textAlign: 'center',
        marginTop: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',

    },

    text2: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
        margin: 20,
        textAlign: 'center',
        marginTop: 50,



    },


});
export default Résultats;

