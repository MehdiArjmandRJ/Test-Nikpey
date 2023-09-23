import { Injectable } from '@angular/core';
import { RxFormGroup } from '@rxweb/reactive-form-validators';

@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor() { }

  public validateFormFields(formGroup: RxFormGroup | null) {
    if (formGroup && formGroup.controls) {
      Object.keys(formGroup.controls).forEach((field: any) => {
        const control: any = formGroup.get(field);
        if (control['controls']) {
          Object.keys(control['controls']).forEach((f: any) => {
            const ct = formGroup.get(field)?.get(f);
            ct?.markAllAsTouched();
          });
        } else {
          control?.markAsTouched();

        }
      });
      return false;
    } else return true;
  }

}
