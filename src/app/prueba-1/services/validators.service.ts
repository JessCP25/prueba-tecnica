import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  isInvalidField(form: FormGroup, field: string): string | null {
    const control = form.controls[field];
    if (control.errors && control.touched) {
      // Devuelve la clave del primer error encontrado
      return Object.keys(control.errors)[0];
    }
    return null;
  }

  isFieldOneMinorFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 >= fieldValue2) {
        formGroup.get(field2)?.setErrors({ notMinor: true });
        return { notMinor: true };
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }

}
