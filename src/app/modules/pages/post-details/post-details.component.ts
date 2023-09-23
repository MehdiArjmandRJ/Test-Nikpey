import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { selectOnePostsRS } from '@app/core/store/post/post.selector';
import { ISelectBoxItem } from '@app/shared/components';
import * as PostActions from '@core/store/post/post.action';
import { Store } from '@ngrx/store';
import { IBreadcrumbs } from '../posts/factory/interfaces/posts.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  breadcrumbs!: IBreadcrumbs[];
  dataSource: any;
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

  constructor(private titleService:Title,private location:Location,private store: Store, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle('Post Details')
    this.breadcrumbs = this.activatedRoute.snapshot.data['breadcrumbs'] as IBreadcrumbs[];
    this.store.dispatch(PostActions.getPostDetail({ id: this.activatedRoute.snapshot.params['id'] }))

    this.store.select(selectOnePostsRS).subscribe((data) => {
      this.dataSource = data['1']
    })
  }

  getUserName() {
    let userName = this.authorList.filter(author => author.key === this.dataSource.userId ? author.value : '')
    return userName[0]?.value;
  }

  back(){
    this.location.back();
  }

}
