import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemRoutingModule } from './design-system-routing.module';
import { DesignSystemComponent } from './design-system.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemRoutingModule
  ],
  declarations: [DesignSystemComponent]
})
export class DesignSystemModule { }
