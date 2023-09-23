import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'design-system',
        loadChildren: () => import('./pages/design-system/design-system.module').then((module) => module.DesignSystemModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./pages/posts/posts.module').then((module) => module.PostsModule)
      },
      {
        path: 'posts/:id',
        loadChildren: () => import('./pages/post-details/post-details.module').then((module) => module.PostDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
