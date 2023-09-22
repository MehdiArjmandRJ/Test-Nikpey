import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import * as PostActions from './post.action';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
  constructor(private $action: Actions, private service: PostService, private store: Store) { }

  _fetchPost = createEffect(() =>
    this.$action.pipe(
      ofType(PostActions.fetchPost),
      switchMap(() => {
        return this.service.getAllPost().pipe(
          map((data: any) => {
            this.store.dispatch(PostActions.getPost(data))
            return data;
          }),
          catchError((_error: any) => of(console.log('we got Error in effect'), console.log(_error)))
        )
      })
    ))
}