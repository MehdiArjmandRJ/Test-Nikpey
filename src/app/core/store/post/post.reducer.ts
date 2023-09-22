// import { Action, createReducer, on } from '@ngrx/store';
// import { initialPostState } from './initial-post.state';

import { createReducer, on } from "@ngrx/store";
import { getPost } from "./post.action";
import { PostState } from "./post.state";

const _postReducer = createReducer(PostState, on(getPost, (state, action) => {
  return { ...state, action: action.type }
}))

export function PostReducer(state: any, action: any) {
  return _postReducer(state, action)
}