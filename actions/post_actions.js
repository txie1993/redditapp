export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REQUEST_ALL_POSTS = 'REQUEST_ALL_POSTS';


const requestAllPosts = () => ({
    type: REQUEST_ALL_POSTS
});

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});
export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestAllPosts());
    return fetch("https://reddit.com/r/ssbm.json")
      .then(response => response.json())
      .then(json => dispatch(receiveAllPosts(json)))
      .catch(error => console.log(error));
  }
}
