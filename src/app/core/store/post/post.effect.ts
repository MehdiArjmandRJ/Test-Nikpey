import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as PostActions from './post.action';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private service: PostService,
    private toastrService: ToastrService
  ) { }

  fetchPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.fetchPost),
      switchMap(() =>
        this.service.getAllPost().pipe(
          map((data: any) =>
            PostActions.getPostSuccess({ posts: data })
          ),
          catchError((error: any) =>
            of(PostActions.getPostsFailure({ error: 'Error occurred' }))
          )
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      switchMap((action) =>
        this.service.deletePost(action.id).pipe(
          map((data: any) => {
            this.toastrService.success('Mission accomplished')
            return PostActions.fetchPost()
          }
          ),
          catchError((error: any) => {
            this.toastrService.error('Error occurred')
            return of(PostActions.getPostsFailure({ error: 'Error occurred' }))
          }
          )
        )
      )
    )
  );

  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.editPost),
      switchMap((action) =>
        this.service.updatePost(action.id, action.data).pipe(
          map((data: any) => {
            this.toastrService.success('Mission accomplished')
            return PostActions.fetchPost()
          }
          ),
          catchError((error: any) => {
            this.toastrService.error('Error occurred')
            return of(PostActions.getPostsFailure({ error: 'Error occurred' }))
          }
          )
        )
      )
    )
  );

  insertPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.insertPost),
      switchMap((action) =>
        this.service.insertPost(action.data).pipe(
          map((data: any) => {
            this.toastrService.success('Mission accomplished')
            return PostActions.fetchPost()
          }
          ),
          catchError((error: any) => {
            this.toastrService.error('Error occurred')
            return of(PostActions.getPostsFailure({ error: 'Error occurred' }))
          }
          )
        )
      )
    )
  );

  getOnePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPostDetail),
      switchMap((action) =>
        this.service.getOnePost(action.id).pipe(
          map((data: any) =>
          {
            return PostActions.getOnePostSuccess({ post: data })
          }
          ),
          catchError((error: any) =>
            of(PostActions.getOnePostsFailure({ error: 'Error occurred' }))
          )
        )
      )
    )
  );
}
