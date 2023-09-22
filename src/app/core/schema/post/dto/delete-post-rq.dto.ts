import { EntityState } from "@ngrx/entity";
export interface IDeletePost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IDeletePostRQ extends EntityState<IDeletePostRQ> { }

export interface IDeletePostRS extends EntityState<IDeletePostRQ> { }