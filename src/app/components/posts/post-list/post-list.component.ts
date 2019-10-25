import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models';
import { PostsStoreActions, PostsStoreSelectors, RootStoreState } from 'src/app/stores';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  public posts$: Observable<PostModel[]>;

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.posts$ = this.store.select(PostsStoreSelectors.selectPostsList);
    this.store.dispatch(new PostsStoreActions.LoadPostsAction());
  }

}
