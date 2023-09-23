import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { SharedInputComponent, SharedSelectBoxComponent, SharedTableComponent, SharedTextareaComponent } from 'src/app/shared/components';

import { MatDialogModule } from '@angular/material/dialog';
import { ActionPostsComponent, BodyPostsComponent, HeaderPostsComponent } from './components';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    SharedInputComponent,
    SharedTableComponent,
    SharedSelectBoxComponent,
    SharedTextareaComponent,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    PostsRoutingModule,
    MatDialogModule
  ],
  declarations: [PostsComponent, HeaderPostsComponent, BodyPostsComponent, ActionPostsComponent]
})
export class PostsModule { }
