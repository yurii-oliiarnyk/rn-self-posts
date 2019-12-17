import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, CREATE_POST } from '../types';

const initState = {
  allPosts: [],
  bookedPosts: [],
  loading: true
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        loading: false,
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

    case REMOVE_POST: {
      const allPosts = state.allPosts.filter(
        post => post.id !== action.payload
      );

      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(post => post.booked)
      };
    }

    case CREATE_POST: {
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts]
      };
    }

    default:
      return state;
  }
};
