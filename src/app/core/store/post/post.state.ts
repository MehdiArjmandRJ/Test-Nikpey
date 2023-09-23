import { IPostTableElement } from "@app/modules/pages/posts/factory/interfaces/posts.interface";
import { createEntityAdapter } from "@ngrx/entity";
import { IGetPostRQ, IGetPostRS } from "../../schema/post/dto/get-post-rq.dto";

export const PostAdapter = createEntityAdapter<IPostTableElement>();

export const PostState: IGetPostRQ = PostAdapter.getInitialState();

export const PostStateRQ: IGetPostRQ = PostAdapter.getInitialState();
export const PostStateRS: IGetPostRS = PostAdapter.getInitialState();

export const PostDetailState: IGetPostRQ = PostAdapter.getInitialState();

export const PostDetailStateRQ: IGetPostRQ = PostAdapter.getInitialState();
export const PostDetailStateRS: IGetPostRS = PostAdapter.getInitialState();