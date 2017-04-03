import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/store'
import PostIndexContainer from './components/post_index_container'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <PostIndexContainer/>
            </Provider>
        );
    }
};
