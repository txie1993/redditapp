import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

export default class PostIndexItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <ScrollView style={styles.body}>
            <Text>{this.props.post.data.selftext}</Text>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        padding: 20
    },
});
