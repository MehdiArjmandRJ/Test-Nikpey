import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ISelectBoxItem } from '@app/shared/components';
import { ITableColumnsModel } from '@app/shared/interfaces/general.interface';
import * as PostActions from '@core/store/post/post.action';
import { Store } from '@ngrx/store';
import { ActionPostsComponent } from '../action-posts/action-posts.component';

@Component({
  selector: 'app-body-posts',
  templateUrl: './body-posts.component.html',
  styleUrls: ['./body-posts.component.scss']
})
export class BodyPostsComponent implements OnInit {
  @Input() displayedColumns!: ITableColumnsModel[];
  @Input() dataSource: any;
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
  constructor(private store: Store, private matDialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  onDeleteAction(id: string) {
    this.store.dispatch(PostActions.deletePost({ id: id }))
  }

  onEditAction(data: any) {
    this.matDialog.open(ActionPostsComponent, { data: { ...data, titlePage: 'Edit Post' } })
  }

  onDetailAction(id: string) {
    this.router.navigate([`panel/posts/${id}`])
  }

}
