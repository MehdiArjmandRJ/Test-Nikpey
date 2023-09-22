import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostEffects } from './core/store/post/post.effect';
import { SharedInputComponent, SharedTableComponent, SharedTextareaComponent } from './shared/components';
import { SharedSelectBoxComponent } from './shared/components/shared-select-box/shared-select-box.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostReducer } from './core/store/post/post.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedInputComponent,
    ReactiveFormsModule,
    SharedSelectBoxComponent,
    SharedTextareaComponent,
    SharedTableComponent,
    RxReactiveFormsModule,
    MatButtonModule, MatInputModule, MatFormFieldModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ post: PostReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
