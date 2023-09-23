import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Title } from '@angular/platform-browser';
import { selectAllPostsRS } from '@app/core/store/post/post.selector';
import { ITableColumnsModel } from '@app/shared/interfaces/general.interface';
import * as PostActions from '@core/store/post/post.action';
import { IBreadcrumbs, ISelectBoxItem } from './factory/interfaces/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  breadcrumbs!: IBreadcrumbs[];
  dataSource: any;
  displayedColumns: ITableColumnsModel[] = [
    {
      key: 'id',
      value: 'ID'
    },
    {
      key: 'userId',
      value: 'UserId'
    },

    {
      key: 'title',
      value: 'Title'
    },

    {
      key: 'body',
      value: 'Body'
    },
    {
      key: 'delete',
      value: 'Delete'
    },
    {
      key: 'edit',
      value: 'Edit'
    },
    {
      key: 'detail',
      value: 'Detail'
    },
  ];
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
  constructor(private titleService:Title,private store: Store, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle('Posts')
    this.breadcrumbs = this.activatedRoute.snapshot.data['breadcrumbs'] as IBreadcrumbs[];

    this.store.dispatch(PostActions.fetchPost())

    this.store.select(selectAllPostsRS).subscribe((data) => {
      this.dataSource = Object.values(data).map((item) => item)
    })
  }

}
