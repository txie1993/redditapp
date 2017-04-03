import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView,
    TouchableHighlight,
    RefreshControl
} from 'react-native';

export default class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            isFetching: true,
            isRefreshing: false
        }
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isFetching) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.posts.posts.data.children),
                isFetching: false,
                isRefreshing: false
            })
        } else {
            this.setState({isFetching: true})
        }
    }

    onRefresh() {
        this.setState({isRefreshing: true});
        this.props.fetchPosts().then(() => {
            this.setState({isRefreshing: false});
        });
    }

    loading() {
        if (this.state.isRefreshing)
             return (
                <Text>Refreshing...</Text>
            );
        else return (
                <Text>Loading...</Text>
            );
    }

    render() {
        if (this.state.isFetching) {
            return this.loading();
        } else {

            return (
                <ListView
                  dataSource={this.state.dataSource}
                  refreshControl={<RefreshControl
                      refreshing = {this.state.isRefreshing}
                      onRefresh = {
                        this.onRefresh.bind(this)
                      } />}
                  renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator}/>}
                  renderRow={(rowData) => <TouchableHighlight underlayColor="lightskyblue" onPress={() => alert(rowData.data.title)}>
                    <View style={styles.item}>
                        <Text style={styles.title}>
                            {rowData.data.title}
                        </Text>
                        <Text style={styles.userAndSub}>
                            by {rowData.data.author}
                            in /r/{rowData.data.subreddit}
                        </Text>
                    </View>
                </TouchableHighlight>}/>
            );
        }
    }
}

const styles = StyleSheet.create({
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
        paddingTop: 3
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    }
});
