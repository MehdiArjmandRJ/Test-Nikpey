import { IPostTableElement } from '@app/modules/pages/posts/factory/interfaces/posts.interface';
import { EntityState } from '@ngrx/entity';

export interface IGetPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface IGetPostRQ extends EntityState<IPostTableElement> { }
export interface IGetPostRS extends EntityState<IPostTableElement> { }