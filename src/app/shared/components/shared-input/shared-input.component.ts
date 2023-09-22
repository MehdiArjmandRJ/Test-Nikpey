import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RxFormGroup, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedInputComponent {
  @Input() type!: string;
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
