import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../actions/post_actions';

const mapStateToProps = state => ({
  posts: state.posts,
  isFetching: state.posts.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
