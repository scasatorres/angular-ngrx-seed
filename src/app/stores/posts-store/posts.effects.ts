import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { PostModel } from 'src/app/models';

import { PostsService } from '../../services/posts/posts.service';
import * as postActions from './posts.actions';

@Injectable()
export class PostsStoreEffects {
  constructor(private actions$: Actions, private postsService: PostsService) { }

  @Effect()
  loadPostsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.LoadPostsAction>(postActions.ActionTypes.LOAD_POSTS),
    mergeMap(() => this.postsService.getPosts()
      .pipe(
        map((posts: PostModel[]) => new postActions.LoadPostsSuccessAction({ posts })),
        catchError((error: any) => of(new postActions.LoadPostsErrorAction({ error })))
      )
    )
  );

  @Effect()
  loadPostEffect$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.LoadPostAction>(postActions.ActionTypes.LOAD_POST),
    switchMap((action) => this.postsService.getPost(action.payload.postId)
      .pipe(
        map((post: PostModel) => new postActions.LoadPostSuccessAction({ post })),
        catchError((error: any) => of(new postActions.LoadPostErrorAction({ error })))
      )
    )
  );

}
