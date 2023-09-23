import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailsComponent } from './post-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    PostDetailRoutingModule
  ],
  declarations: [PostDetailsComponent]
})
export class PostDetailsModule { }
