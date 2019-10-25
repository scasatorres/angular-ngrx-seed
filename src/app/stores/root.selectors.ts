import { createSelector, MemoizedSelector } from '@ngrx/store';

import { PostsStoreSelectors } from './posts-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  PostsStoreSelectors.selectPostsError,
  (postsError: any) => {
    return postsError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  PostsStoreSelectors.selectPostsIsLoading,
  (postsIsLoading: any) => {
    return postsIsLoading;
  }
);
