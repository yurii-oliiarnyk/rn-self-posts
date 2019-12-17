import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, CREATE_POST } from '../types';
import { DATA } from '../../data';

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA
  };
};

export const toogleBooked = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id
  };
};

export const removePost = id => {
  return {
    type: REMOVE_POST,
    payload: id
  };
};

export const createPost = post => {
  post.id = Date.now().toString();

  return {
    type: CREATE_POST,
    payload: post
  };
};
