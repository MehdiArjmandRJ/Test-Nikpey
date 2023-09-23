import { createReducer, on } from "@ngrx/store";
import * as PostActions from "./post.action";
import { PostAdapter, PostDetailStateRQ, PostDetailStateRS, PostStateRQ, PostStateRS } from "./post.state";

const _postReducerRQ = createReducer(
  PostStateRQ,
  on(PostActions.fetchPost, (state) => state)
);

const _postReducerRS = createReducer(
  PostStateRS,
  on(PostActions.getPostSuccess, (state, { posts }) =>
    PostAdapter.addMany(posts, state)
  ),
);

const _postDetailReducerRQ = createReducer(
  PostDetailStateRQ,
  on(PostActions.getPostDetail, (state) => state)
);

const _postDetailReducerRS = createReducer(
  PostDetailStateRS,
  on(PostActions.getOnePostSuccess, (state, { post }) =>
    PostAdapter.addOne(post, state)
  ),
);

export function PostReducerRQ(state: any, action: any) {
  return _postReducerRQ(state, action);
}

export function PostReducerRS(state: any, action: any) {
  return _postReducerRS(state, action);
}

export function PostOneReducerRQ(state: any, action: any) {
  return _postDetailReducerRQ(state, action);
}

export function PostOneReducerRS(state: any, action: any) {
  return _postDetailReducerRS(state, action);
}
