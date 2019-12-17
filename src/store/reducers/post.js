import { LOAD_POSTS, TOGGLE_BOOKED } from '../types';

const initState = {
  allPosts: [],
  bookedPosts: []
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter(post => post.booked)
      };
    }

    case TOGGLE_BOOKED: {
      const allPosts = state.allPosts.map(post => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }

        return post;
      });

      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(post => post.booked)
      };
    }

    default:
      return state;
  }
};
