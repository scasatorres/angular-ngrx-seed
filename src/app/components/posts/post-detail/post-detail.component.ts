import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsStoreActions, PostsStoreSelectors, RootStoreState } from 'src/app/stores';

import { PostModel } from './../../../models/posts/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
  public post$: Observable<PostModel>;

  constructor(private route: ActivatedRoute, private store: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.post$ = this.store.select(PostsStoreSelectors.selectPostSelected);

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const postId = paramMap.get('postId');
      this.store.dispatch(new PostsStoreActions.LoadPostAction({ postId }));
    });
  }

}
