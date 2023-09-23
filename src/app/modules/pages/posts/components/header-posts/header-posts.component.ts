import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBreadcrumbs } from '../../factory/interfaces/posts.interface';
import { ActionPostsComponent } from '../action-posts/action-posts.component';

@Component({
  selector: 'app-header-posts',
  templateUrl: './header-posts.component.html',
  styleUrls: ['./header-posts.component.scss']
})
export class HeaderPostsComponent implements OnInit {
  @Input() title!: string;
  @Input() breadcrumbs!: IBreadcrumbs[];
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  insert() {
    this.matDialog.open(ActionPostsComponent, { data: { data:{}, titlePage: 'Insert Post' } })
  }

}
