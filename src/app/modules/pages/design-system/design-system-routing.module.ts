import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './design-system.component';

const routes: Routes = [
  {
    path: 'design-system',
    component: DesignSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DesignSystemRoutingModule { }
