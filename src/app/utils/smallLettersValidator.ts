import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function smallLettersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isSmallLettersOnly = /^[a-z]*$/.test(control.value);
    console.log(control.value, isSmallLettersOnly)
    return isSmallLettersOnly ? null : { notSmallLetters: {value: control.value} }
  }
}
