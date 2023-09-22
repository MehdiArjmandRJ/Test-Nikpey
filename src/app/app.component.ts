import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { email, minLength, required, RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';
import { getPost } from './core/store/post/post.action';
import { getPostStore } from './core/store/post/post.selector';
import { ISelectBoxItem } from './shared/components';
class PostModel {
  @required({ message: 'Email is required!' })
  @email({ message: 'Enter valid Email! ' })
  @minLength({ value: 6, message: 'Email length most be more 6 character! ' })
  email!: string;
  @required({ message: 'Title is required!' })
  title!: string;
  @required({ message: 'UserId is required!' })
  userId!: string;
  @required({ message: 'Body is required!' })
  body!: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: RxFormGroup;
  authorList: ISelectBoxItem[] = [
    {
      key: '1',
      value: 'Arjmand'
    },
    {
      key: '2',
      value: 'Nikpey'
    }
  ];
  constructor(private _fb: RxFormBuilder, private store: Store) { }

  ngOnInit() {
    this.initialForm();
    this.store.dispatch(getPost())

    setTimeout(() => {
      this.store.select(getPostStore).subscribe((data) => {
        console.log(data)
      }
      )
    }, 5000);
  }

  initialForm() {
    let formModel: PostModel = new PostModel();
    this.form = this._fb.formGroup(formModel) as RxFormGroup
  }

  submitForm() {
    console.log(this.form);
  }
}
