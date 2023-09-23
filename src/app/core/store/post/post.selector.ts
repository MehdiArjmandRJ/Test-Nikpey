import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGetPostRS } from '../../schema/post/dto/get-post-rq.dto';

export const selectPostStateRS = createFeatureSelector<IGetPostRS>('responseState');
export const selectOnePostStateRS = createFeatureSelector<IGetPostRS>('responseOneState');

export const selectAllPostsRS = createSelector(
  selectPostStateRS,
  (state) => state.entities
);

export const selectOnePostsRS = createSelector(
  selectOnePostStateRS,
  (state) => state.entities
);

export const selectTotalPostsRS = createSelector(
  selectPostStateRS,
  (state) => state.ids.length
);
