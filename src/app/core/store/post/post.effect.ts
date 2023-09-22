import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { getPost } from './post.action';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
  constructor(private $action: Actions, private service: PostService, private store: Store) { }

  _getPost = createEffect(() =>
    this.$action.pipe(
      ofType(getPost),
      exhaustMap((action) => {
        return this.service.getAllPost().pipe(
          map((data: any) => {
            console.log(data);
            return data;
          }),
          catchError((_error: any) => of(console.log('we got Error in effect'), console.log(_error)))
        )
      })
    ))
    }