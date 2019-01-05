import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const givenAge = control.value;
    return givenAge < minAge ? { 'underAge': {value: control.value} } : null;
  };
}
