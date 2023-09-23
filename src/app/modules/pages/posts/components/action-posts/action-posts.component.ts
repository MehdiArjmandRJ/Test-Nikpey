import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISelectBoxItem } from '@app/shared/components';
import { UtilService } from '@app/shared/services/utility.service';
import * as PostActions from '@core/store/post/post.action';
import { Store } from '@ngrx/store';
import { RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';
import { PostModel } from '../../factory/models/post-form.model';

@Component({
  selector: 'app-action-posts',
  templateUrl: './action-posts.component.html',
  styleUrls: ['./action-posts.component.scss']
})
export class ActionPostsComponent implements OnInit {
  form!: RxFormGroup;
  title!: string;
  authorList: ISelectBoxItem[] = [
    {
      key: 1,
      value: 'Arjmand'
    },
    {
      key: 2,
      value: 'Nikpey'
    },
    {
      key: 3,
      value: 'Mohamadi'
    },
    {
      key: 4,
      value: 'Ahmadi'
    },
    {
      key: 5,
      value: 'Abasi'
    },
    {
      key: 6,
      value: 'Mortazavi'
    },
    {
      key: 7,
      value: 'Donyadost'
    },
    {
      key: 8,
      value: 'Jahandide'
    },
    {
      key: 9,
      value: 'Golestani'
    },
    {
      key: 10,
      value: 'Anami'
    }
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matDialog: MatDialog, private _fb: RxFormBuilder, private store: Store, private utilityService: UtilService) {
    this.initialForm(data);
    console.log(data);
    this.title = data.titlePage;
  }

  ngOnInit() {
  }

  initialForm(data: any = null) {
    let formModel: PostModel = new PostModel(data);
    this.form = this._fb.formGroup(formModel) as RxFormGroup;
  }

  submitForm() {
    if (this.form.valid) {
      if (this.title === 'Edit Post') {
        this.store.dispatch(PostActions.editPost({ id: this.form.value.id, data: this.form.value }))
      } else {
        this.store.dispatch(PostActions.insertPost({ data: this.form.value }))
      }
      this.matDialog.closeAll();
    } else {
      this.utilityService.validateFormFields(this.form as RxFormGroup)
    }
  }

}
