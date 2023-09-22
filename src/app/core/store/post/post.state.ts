import { createEntityAdapter } from "@ngrx/entity";
import { IGetPost, IGetPostRQ } from "../../schema/post/dto/get-post-rq.dto";

export const PostAdapter = createEntityAdapter<IGetPost>();

export const PostState: IGetPostRQ = PostAdapter.getInitialState();