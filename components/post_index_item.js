import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Linking
} from 'react-native';

export default class PostIndexItem extends Component {
    constructor(props) {
        super(props);
    }

    content() {
        let preview = this.props.post.data.preview;
        if (preview) {
            let url = this.props.post.data.url
            return (<Image style={{
                width: 250,
                height: 500,
                padding: 50
            }} source={{
                uri: url
            }}/>);
        } else if (this.props.post.data.selftext_html){
          return(
            <Text>this.props.post.data.selftext</Text>
          )
        }
    }
    render() {
        return (
            <View style={styles.body}>
                <Text>{this.props.post.data.url}</Text>
                {this.content()}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 0,
        paddingBottom: 0
    },
    userAndSub: {
        padding: 10,
        paddingTop: 3
    },
    body: {
        padding: 65
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    }
});
