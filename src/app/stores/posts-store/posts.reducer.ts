import { Actions, ActionTypes } from './posts.actions';
import { initialState, State } from './posts.state';

export function postsReducer(state = initialState, action: Actions ): State {
  switch (action.type) {
    case ActionTypes.LOAD_POSTS: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case ActionTypes.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload.posts,
        selectedPostId: null,
        isLoading: false,
        error: null
      };
    }

    case ActionTypes.LOAD_POSTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    case ActionTypes.LOAD_POST: {
      return {
        ...state,
        selectedPostId: action.payload.postId,
        isLoading: true,
        error: null
      };
    }

    case ActionTypes.LOAD_POST_SUCCESS: {
      return {
        ...state,
        posts: [action.payload.post],
        isLoading: false,
        error: null
      };
    }

    case ActionTypes.LOAD_POST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
