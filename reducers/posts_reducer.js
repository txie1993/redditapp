import {
    RECEIVE_ALL_POSTS,
    REQUEST_ALL_POSTS
} from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (oldState = {isFetching: true}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, {
                isFetching: false,
                posts: action.posts
            });
        case REQUEST_ALL_POSTS:
            return merge({}, {
                isFetching: true
            });
        default:
            return oldState;
    }
};

export default PostsReducer;
