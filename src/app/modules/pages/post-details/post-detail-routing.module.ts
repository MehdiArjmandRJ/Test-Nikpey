import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumbs: [
        {
          label: 'Posts page',
          route: 'panel/posts'
        },
        {
          label: 'Posts Details',
          route: 'panel/posts/id'
        }
      ]
    },
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailRoutingModule { }
