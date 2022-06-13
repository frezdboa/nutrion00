// screens/BlogDetails.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
var score2;
class BlogDetails extends Component {
    constructor() {
        super();
    }
    render() {
        // Access the postId and otherParam via Destructuring assignment
        const { postId, question } = this.props.route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Post id is: {postId}</Text>
                <Text>la question est la: {question}</Text>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        title="next"
                        onPress={() => {
                            this.props.navigation.navigate('Blog2', {
                                postId: score2,

                            });
                        }}
                    />

                    <View>
                        <Button
                            title="Question à 3 point"
                            onPress={() => {
                                score2 = postId + 2
                            }}

                        />


                    </View>
                </View>
            </View>

        );
    }
}
export default BlogDetails;