

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGetPost } from "../../schema/post/dto/get-post-rq.dto";

const getPostState = createFeatureSelector<IGetPost>('post');

export const getPostStore = createSelector(getPostState, (state) => state); 