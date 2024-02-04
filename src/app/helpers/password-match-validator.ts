import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator to check if password and confirm password match
export function passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get(controlName)?.value;
    const confirmPassword = control.get(matchingControlName)?.value;
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  };
}
