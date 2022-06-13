// screens/Blog.js
import React, { Component } from 'react';
import { Button, View } from 'react-native';

var score;
var num;
class Blog extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="next"
                    onPress={() => {
                        this.props.navigation.navigate('BlogDetails', {
                            postId: score,
                            question: num,

                        });
                    }}
                />

                <View>
                    <Button
                        title="Question à 3 point"
                        onPress={() => {
                            score = 3
                            num = 1

                        }}

                    />


                </View>

                <View>
                    <Button
                        title="Question à 2 point"
                        onPress={() => {
                            score = 2
                            num = 2
                        }}

                    />


                </View>
            </View>
        );
    }
}
export default Blog;