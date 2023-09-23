import { IPostTableElement } from '@app/modules/pages/posts/factory/interfaces/posts.interface';
import { createAction, props } from '@ngrx/store';


export const fetchPost = createAction('[POST] fetch posts');
export const deletePost = createAction('[POST] delete posts', props<{ id: string }>());
export const editPost = createAction('[POST] edit posts', props<{ id: string, data: any }>());
export const insertPost = createAction('[POST] insert posts', props<{ data: any }>());
export const getPostDetail = createAction('[POST] detail posts', props<{ id: string }>());


export const getPostSuccess = createAction(
  "[Post] Get Post Success",
  props<{ posts: IPostTableElement[] }>()
);

export const getPostsFailure = createAction(
  "[Post] Get Posts Failure",
  props<{ error: string }>()
);

export const getOnePostSuccess = createAction(
  "[Post] Get One Post Success",
  props<{ post: IPostTableElement }>()
);

export const getOnePostsFailure = createAction(
  "[Post] Get One Posts Failure",
  props<{ error: string }>()
);