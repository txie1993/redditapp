import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView
} from 'react-native';

export default class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            isFetching: true
        }
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isFetching) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.posts.posts.data.children),
                isFetching: false
            })
        } else {
            this.setState({isFetching: true})
        }
    }

    loading() {
        return (
            <Text>Loading...</Text>
        );
    }

    render() {
        if (this.state.isFetching) {
            return this.loading();
        } else {

            return (
                <ListView dataSource={this.state.dataSource} renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator}/>} renderRow={(rowData) => <View style={styles.item}>
                    <Text style={styles.title}>
                        {rowData.data.title}
                    </Text>
                    <Text style={styles.userAndSub}>
                        by {rowData.data.author} in /r/{rowData.data.subreddit}
                    </Text>
                </View>}/>
            );
        }
    }
}

var styles = StyleSheet.create({
  item: {
    flex: 1
  },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        paddingBottom: 0
    },
    userAndSub: {
        padding: 10,
        paddingTop: 5
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    }
});
