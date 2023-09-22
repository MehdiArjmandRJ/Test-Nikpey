import { createReducer, on } from "@ngrx/store";
import * as PostActions from "./post.action";
import { PostState } from "./post.state";

const _postReducer = createReducer(
  PostState,
  on(PostActions.getPost, (state, action) => {
    console.log("ada:", action)
    return {
      ...state,
      ...action
    }
  }))

export function PostReducer(state: any, action: any) {
  return _postReducer(state, action)
}