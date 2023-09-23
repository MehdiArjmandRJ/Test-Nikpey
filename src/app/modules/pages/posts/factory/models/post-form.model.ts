import { email, minLength, prop, required } from "@rxweb/reactive-form-validators";

export class PostModel {
    constructor(data: any) {
        if (data) {
            this.body = data.body ? data.body : null;
            this.userId = data.userId ? data.userId : null;
            this.title = data.title ? data.title : null;
            this.id = data.id ? data.id : null;
        }
    }
    @required({ message: 'Email is required!' })
    @email({ message: 'Enter valid Email! ' })
    @minLength({ value: 6, message: 'Email length most be more 6 character! ' })
    email!: string;
    @required({ message: 'Title is required!' })
    title!: string;
    @required({ message: 'UserId is required!' })
    userId!: string;
    @required({ message: 'Body is required!' })
    body!: string;
    @prop()
    id!: string;
}