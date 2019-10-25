import { Action } from '@ngrx/store';
import { PostModel } from 'src/app/models';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ActionTypes {
  LOAD_POSTS = '[Post] Load posts',
  LOAD_POSTS_SUCCESS = '[Post] Load posts success',
  LOAD_POSTS_ERROR = '[Post] Load posts error',

  LOAD_POST = '[Post] Load a single post',
  LOAD_POST_SUCCESS = '[Post] Load post success',
  LOAD_POST_ERROR = '[Post] Load post error',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class LoadPostsAction implements Action {
  readonly type = ActionTypes.LOAD_POSTS;

  constructor() { }
}

export class LoadPostsSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_POSTS_SUCCESS;

  constructor(public payload: { posts: PostModel[] }) { }
}

export class LoadPostsErrorAction implements Action {
  readonly type = ActionTypes.LOAD_POSTS_ERROR;

  constructor(public payload: { error: any }) { }
}

export class LoadPostAction implements Action {
  readonly type = ActionTypes.LOAD_POST;

  constructor(public payload: { postId: string }) { }
}

export class LoadPostSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_POST_SUCCESS;

  constructor(public payload: { post: PostModel }) { }
}

export class LoadPostErrorAction implements Action {
  readonly type = ActionTypes.LOAD_POST_ERROR;

  constructor(public payload: { error: any }) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  LoadPostsAction |
  LoadPostsSuccessAction |
  LoadPostsErrorAction |
  LoadPostAction |
  LoadPostSuccessAction |
  LoadPostErrorAction;
