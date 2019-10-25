import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { PostModel } from 'src/app/models';

import { State } from './posts.state';

const getError = (state: State): any => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getPosts = (state: State): PostModel[] => state.posts;
const getSelectedPostId = (state: State): string => state.selectedPostId;

export const selectPostsState: MemoizedSelector<object, State> = createFeatureSelector<State>('posts');
export const selectPostsError: MemoizedSelector<object, any> = createSelector(selectPostsState, getError);
export const selectPostsIsLoading: MemoizedSelector<object, boolean> = createSelector(selectPostsState, getIsLoading);
export const selectPostsList: MemoizedSelector<object, PostModel[]> = createSelector(selectPostsState, getPosts);
export const selectSelectedPostId: MemoizedSelector<object, string> = createSelector(selectPostsState, getSelectedPostId);

export const selectPostSelected: MemoizedSelector<object, PostModel> = createSelector(selectPostsList, selectSelectedPostId,
  (postList, selectedPostId) => {
    return postList.find((post: PostModel) => post.id === Number(selectedPostId));
  }
);
