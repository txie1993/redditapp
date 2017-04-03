import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/store'
import PostIndexContainer from './components/post_index_container'
import {StyleSheet, View, Dimensions, Text, NavigatorIOS} from 'react-native';

const store = configureStore()

export default class Root extends Component {
    render() {
        let dimensions = Dimensions.get('window');
        return (
            <View style={{
                paddingTop: 25,
                height: dimensions.height,
                backgroundColor: '#F5FCFF'
            }}>
                <Provider store={store}>
                    <NavigatorIOS initialRoute={{
                        component: PostIndexContainer,
                        title: 'Reddit'
                    }} style={{
                        flex: 1
                    }}/>
                </Provider>
            </View>
        );
    };
}
