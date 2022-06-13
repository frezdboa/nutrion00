// screens/BlogDetails.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
var numeroblog2;


class Blog2 extends Component {
    constructor() {
        super();
    }
    render() {
        // Access the postId and otherParam via Destructuring assignment
        const { postId } = this.props.route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Post id is: {postId}</Text>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        title="next"
                        onPress={() => {
                            this.props.navigation.navigate('BlogDetails', {
                                postId: score2,

                            });
                        }}
                    />

                    <View>
                        <Button
                            title="Question à 2 point"
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
export default Blog2;