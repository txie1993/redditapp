import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/store'
import PostIndexContainer from './components/post_index_container'
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

const store = configureStore()

export default class Root extends Component {
    render() {
      let dimensions = Dimensions.get('window');
        return (
            <View style={{
                paddingTop: 65,
                height: dimensions.height
            }}>
                <Provider store={store}>
                    <PostIndexContainer/>
                </Provider>
            </View>
        );
    };
}
