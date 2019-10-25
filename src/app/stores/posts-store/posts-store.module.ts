import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostsStoreEffects } from './posts.effects';
import { postsReducer } from './posts.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsStoreEffects])
  ],
  providers: [PostsStoreEffects]
})
export class PostsStoreModule { }
