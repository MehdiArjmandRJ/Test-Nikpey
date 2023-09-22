import { createAction, props } from '@ngrx/store';
import { IDeletePostRQ, IDeletePostRS } from '../../schema/post/dto/delete-post-rq.dto';
import { IInsertPostRQ, IInsertPostRS } from '../../schema/post/dto/insert-post-rq.dto';
import { IUpdatePostRQ, IUpdatePostRS } from '../../schema/post/dto/update-post-rq.dto';
import { IGetPost } from '../../schema/post/dto/get-post-rq.dto';
//Now
const GET_POST = '[POST] get posts'
const FETCH_POST = '[POST] fetch posts'


export const fetchPost = createAction(FETCH_POST);
export const getPost = createAction(GET_POST, props<{posts: IGetPost[]}>());

//Past
export const resetPostState = createAction(
  '[POST] Reset State'
);
// export const getPost = createAction(
//   '[POST] Get Post',
//   props<{ getPostRQ: IGetPostRQ, getPostRS: IGetPostRS }>()
// );

export const insertPost = createAction(
  '[POST] Insert Post',
  props<{ insertPostRQ: IInsertPostRQ, insertPostRS: IInsertPostRS }>()
);

export const updatePost = createAction(
  '[POST] Update Post',
  props<{ updatePostRQ: IUpdatePostRQ, updatePostRS: IUpdatePostRS }>()
);

export const deletePost = createAction(
  '[POST] Delete Post',
  props<{ deletePostRQ: IDeletePostRQ, deletePostRS: IDeletePostRS }>()
);
