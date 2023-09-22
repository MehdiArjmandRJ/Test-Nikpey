import { EntityState } from "@ngrx/entity/src/models";

export interface IUpdatePost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IUpdatePostRQ extends EntityState<IUpdatePost> { }

export interface IUpdatePostRS extends EntityState<IUpdatePost> { }