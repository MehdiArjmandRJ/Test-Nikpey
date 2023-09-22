import { EntityState } from "@ngrx/entity/public_api";

export interface IInsertPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IInsertPostRQ extends EntityState<IInsertPost> { }

export interface IInsertPostRS extends EntityState<IInsertPost> { }