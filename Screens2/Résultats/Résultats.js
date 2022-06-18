import { Text, Pressable, View, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useState, Component } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import StyledButton from '../../components/StyledButton';

var background1, background2, background3, background4, background5, background6, background6b, background7, background7b, background8, background9, background9b, background10, background11, background11b;

class Résultats extends Component {
    constructor() {
        super()

    }
    render() {


        const { score1, rep1, score2, rep2, score3, rep3, score4, rep4, score5, rep5, score6, rep6, score6b, rep6b, score7, rep7, score7b, rep7b, score8, rep8, score9, rep9, score9b, rep9b
            , score10, rep10, score11, rep11, score11b, rep11b1, rep11b2, rep11b3, rep11b4, rep11b5, rep11b6, } = this.props.route.params;



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
        else { background9 = 'white' }

        if (score9b == 0) { background9b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score9b == 1) { background9b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score9b == 2) { background9b = 'hsla(120, 100%, 50%, 0.7)' }
        else { background9b = 'white' }

        if (score10 == 0) { background10 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score10 == 1) { background10 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score10 == 2) { background10 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background10 = 'white' }

        if (score11 == 0) { background11 = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score11 == 1) { background11 = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score11 == 2) { background11 = 'hsla(120, 100%, 50%, 0.7)' }
        else { background10 = 'white' }

        if (score11b == 0) { background11b = 'hsla(0, 100%, 50%, 0.7)' }
        else if (score11b == 1) { background11b = 'hsla(30, 100%, 50%, 0.7)' }
        else if (score11b == 2) { background11b = 'hsla(120, 100%, 50%, 0.7)' }
        else { background10 = 'white' }

        return (

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollview}
                scrollEnabled={true}
            >

                <View>

                    <Pressable
                        onPress={() => this.props.navigation.navigate(("Menu"))}
                        style={{ alignSelf: 'flex-end', position: 'absolute', zIndex: 5, right: 30, top: 50 }}>

                        <FontAwesome5 name="home" size={40} />


                    </Pressable>
                </View>


                <View style={styles.container}>

                    <Text style={{ fontSize: 22, fontWeight: '600', textDecorationLine: 'underline', marginTop: 40 }}>{"\nRésultats"} </Text>

                    <Text style={{ fontSize: 19, fontWeight: '300', textAlign: 'center', marginTop: 40, margin: 15, }}>{"Bravo, vous avez fini ce questionnaire ! Au quotidien et quel que soit votre mode de vie, trouvez votre façon d’avoir une alimentation plus équilibrée. Chaque petit pas compte et finit par faire une grande différence !"} </Text>



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

                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 60, borderTopWidth: 2, borderTopColor: 'black', }}><Text style={{ fontSize: 14, color: 'black', fontFamily: 'Roboto2', textAlign: 'center', marginTop: 20 }}>{"11. Les produits salés"}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 45, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Biscuits apéritifs / fruits à coque salés / snacks salés :"}{rep11b1}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Plats préparés du commerce :"}{rep11b2}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Charcuterie :"}{rep11b3}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Soupes déshydratées / bouillon KUB :"}{rep11b4}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Pain :"}{rep11b5}</Text></Pressable>
                    <Pressable style={{ backgroundColor: background11b, top: 20, width: '90%', height: 30, }}><Text style={{ fontSize: 12, color: 'black', textAlign: 'left', marginHorizontal: 10, fontWeight: '400' }}>{"Fromage :"}{rep11b6}</Text></Pressable>

                    <Pressable style={{ backgroundColor: background11b, fontSize: 12, color: 'black', textAlign: 'left', top: 20, width: '90%', height: 30, }}><Text style={{ marginHorizontal: 10 }}>Score : {score11b}/2</Text></Pressable>


                    <Text style={styles.text2}>{"Un Quiz sur l'alimentation est aussi disponible si vous souhaitez tester vos connaissances  !"}</Text>


                    <StyledButton
                        type="primary"
                        content={"Faire le Quiz !"}
                        onPress="Quiz">
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

