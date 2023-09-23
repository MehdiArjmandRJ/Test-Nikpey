import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () => import('./modules/layout.module').then((module) => module.LayoutModule)
  },
  { path: '**', redirectTo: 'panel/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
