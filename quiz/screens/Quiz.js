import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { text } from '@fortawesome/fontawesome-svg-core';
import styles from '../../Screens2/Question2/styles';
import StyledButton from '../../components/StyledButton';
import Home2 from '../../Screens2/Home/Home2';

const Quiz = () => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [maxScore, setmaxScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [Option1, setOption1] = useState(null);
    const [Option2, setOption2] = useState(null);
    const [Option0, setOption0] = useState(null);
    const [Option1b, setOption1b] = useState(null);
    const [Option2b, setOption2b] = useState(null);
    const [Option0b, setOption0b] = useState(null);
    const [Option1c, setOption1c] = useState(null);
    const [Option2c, setOption2c] = useState(null);
    const [Option0c, setOption0c] = useState(null);


    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        let option1 = allQuestions[currentQuestionIndex]['option1'];
        let option1b = allQuestions[currentQuestionIndex]['option1b'];
        let option1c = allQuestions[currentQuestionIndex]['option1c'];
        let option2 = allQuestions[currentQuestionIndex]['option2'];
        let option2b = allQuestions[currentQuestionIndex]['option2b'];
        let option2c = allQuestions[currentQuestionIndex]['option2c'];
        let option0 = allQuestions[currentQuestionIndex]['option0'];
        let option0b = allQuestions[currentQuestionIndex]['option0b'];
        let option0c = allQuestions[currentQuestionIndex]['option0c'];

        setCurrentOptionSelected(selectedOption);

        setCorrectOption(correct_option);
        setOption1(option1);
        setOption1b(option1b);
        setOption1c(option1c);
        setOption2b(option2b);
        setOption2c(option2c);
        setOption2(option2);
        setOption0(option0);
        setOption0b(option0b);
        setOption0c(option0c);

        setIsOptionsDisabled(true);

        setmaxScore((currentQuestionIndex + 1) * 2)

        if (selectedOption == correct_option) {
            // Set Score
            setScore(score + 1)
        }
        else if (selectedOption == option1) {
            //Set Score
            setScore(score + 1)
        }
        else if (selectedOption == option2) {
            //Set Score
            setScore(score + 1)
        }

        // if (selectedOption == option1) {
        //     // Set Score
        //     setScore(score + 1)
        //     if (score + 1 > maxScore) { setScore(maxScore) }
        // }
        // else if (selectedOption == option1b) {
        //     setScore(score + 1)
        //     if (score + 1 > maxScore) { setScore(maxScore) }
        // }
        // else if (selectedOption == option1c) {
        //     setScore(score + 1)
        //     if (score + 1 > maxScore) { setScore(maxScore) }
        // }
        // else if (selectedOption == option2) {
        //     setScore(score + 2)
        //     if (score > maxScore) { setScore(maxScore) }
        // }
        // else if (selectedOption == option2b) {
        //     setScore(score + 2)
        //     if (score > maxScore) { setScore(maxScore) }
        // }
        // else if (selectedOption == option2c) {
        //     setScore(score + 2)
        //     if (score > maxScore) { setScore(maxScore) }
        // }
        // setmaxScore((currentQuestionIndex + 1) * 2)
        // Show Next Button
        setShowNextButton(true)


    }


    const closeModal = () => {

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        setShowRecommandation(true);

        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setShowRecommandation(true);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        setShowRecommandation(true);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{ color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2, marginTop: 10 }}>{currentQuestionIndex + 1}</Text>
                    <Text style={{ color: COLORS.black, fontSize: 18, opacity: 0.6, marginTop: 10 }}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.black,
                    fontSize: 25,
                    marginTop: 50,
                    marginBottom: -10,
                    fontFamily: 'Roboto2',



                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3,
                                borderColor: option == correctOption
                                    ? COLORS.success
                                    : option == Option1
                                        ? COLORS.success
                                        : option == Option2
                                            ? COLORS.success
                                            : option == currentOptionSelected
                                                ? COLORS.error
                                                : COLORS.secondary + '20',
                                backgroundColor: option == correctOption
                                    ? COLORS.success + '20'
                                    : option == Option1
                                        ? COLORS.success + '20'
                                        : option == Option2
                                            ? COLORS.success + '20'
                                            : option == currentOptionSelected
                                                ? COLORS.error + '20'
                                                : COLORS.secondary + '50',
                                height: 60, borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 5
                            }}
                        >
                            <Text style={{ fontSize: 15, color: COLORS.black }}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option == correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : option == Option1 ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : option == Option2 ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        marginTop: 3, width: '70%', padding: 20, borderRadius: 40, alignSelf: 'center',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    }}>
                    <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: '600' }}>Next</Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',
                top: 100

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                }, {
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar style='auto' />
            <View style={{
                flex: 1,
                paddingVertical: 40,
                paddingHorizontal: 16,
                backgroundColor: COLORS.background,
                position: 'relative'
            }}>

                {/* ProgressBar */}
                {renderProgressBar()}

                {/* Question */}
                {renderQuestion()}

                {/* Options */}
                {renderOptions()}

                {/* Next Button */}
                {renderNextButton()}


                {/* Score Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showScoreModal}
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            backgroundColor: COLORS.white,
                            width: '90%',
                            borderRadius: 20,
                            padding: 20,
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{score > (allQuestions.length / 2) ? 'Félicitations!' : 'Oops!'}</Text>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginVertical: 20
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    color: score > (allQuestions.length / 2) ? COLORS.success : COLORS.error
                                }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ {allQuestions.length}</Text>
                            </View>
                            {/* Retry Quiz button */}
                            <TouchableOpacity
                                onPress={restartQuiz}
                                style={{
                                    backgroundColor: COLORS.accent,
                                    padding: 20, width: '100%', borderRadius: 20
                                }}>
                                <Text style={{
                                    textAlign: 'center', color: COLORS.white, fontSize: 20
                                }}>Retour</Text>
                            </TouchableOpacity>


                        </View>

                    </View>
                </Modal>

                {/* Background Image */}
                <Image
                    source={require('../assets/images/fruits.png')}
                    style={{
                        width: SIZES.width,
                        height: 300,
                        zIndex: -1,
                        position: 'absolute',
                        bottom: 0,
                        left: -150,
                        right: 0,
                        opacity: 0.2,

                    }}
                    resizeMode={'contain'}
                />
                <Image
                    source={require('../assets/images/légumes.png')}
                    style={{
                        width: SIZES.width,
                        height: 350,
                        zIndex: -1,
                        position: 'absolute',
                        bottom: 300,
                        left: -150,
                        right: 0,
                        opacity: 0.1,

                    }}
                    resizeMode={'contain'}
                />


            </View>
        </SafeAreaView>
    )
}

export default Quiz