import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RxFormGroup, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
export interface ISelectBoxItem {
  key: string;
  value: string
}
@Component({
  selector: 'app-shared-select-box',
  templateUrl: './shared-select-box.component.html',
  styleUrls: ['./shared-select-box.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatSelectModule
  ]
})
export class SharedSelectBoxComponent {
  @Input() list!: ISelectBoxItem[];
  @Input() label!: string;
  @Input() controlForm!: RxFormGroup;
  @Input() controlName!: string;

  getErrors() {
    if (this.controlName) {
      let errorMessage: any = this.controlForm.controls[this.controlName];
      return errorMessage['errorMessage'];
    } else return null;
  }

  checkErrors() {
    if (this.controlName) {
      return !this.controlForm.controls[this.controlName].valid && this.controlForm.controls[this.controlName].touched;
    } else return null;
  }

}
