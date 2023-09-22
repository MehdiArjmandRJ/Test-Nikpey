import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface IGetPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface IGetPostRQ extends EntityState<IGetPost> {}
export interface IGetPostRS extends EntityState<IGetPost> {}