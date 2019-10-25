import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    TranslateModule.forChild()
  ],
  exports: [
    PostListComponent,
    PostDetailComponent
  ]
})
export class PostsModule { }
