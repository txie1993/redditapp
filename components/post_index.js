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
            // nextProps.posts.posts.data.children.forEach(child => console.log(child.data.title));
            // console.log(nextProps.posts.posts.data.children);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.posts.posts.data.children),
                isFetching: false
            })
        } else {
            this.setState({isFetching: true})
        }
    }

    renderFooter() {
        let LoadingView;

        if (Platform.OS === 'ios') {
            LoadingView = ActivityIndicatorIOS;
        } else {
            LoadingView = ProgressBarAndroid;
        }

        return (
            <View>
                <LoadingView styleAttr='Small'/>
            </View>
        )
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

            return (<ListView dataSource={this.state.dataSource} renderRow={(rowData) => <View>
                <Text>
                    {rowData.data.title}
                </Text>
                <Text>
                    by {rowData.data.author}
                </Text>
            </View>}/>);
        }
    }
}
