import { createEntityAdapter } from "@ngrx/entity";
import { IGetPost, IGetPostRQ, IGetPostRS } from "../../schema/post/dto/get-post-rq.dto";

export const PostAdapter = createEntityAdapter<IGetPost>();

export const PostState: IGetPostRQ = PostAdapter.getInitialState();

export const PostStateRQ: IGetPostRQ = PostAdapter.getInitialState();
export const PostStateRS: IGetPostRS = PostAdapter.getInitialState();