import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: [,[Validators.minLength(3)]],
    favorites: this.fb.array( [
      ['Metal Gear'],
      ['Gris']
    ], Validators.required )
  })

  newFavorite: FormControl = this.fb.control('');

  get favoForm() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor
  (
    private readonly fb: FormBuilder
  ) {}

    validateField(field: string) {
      return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    }

    save() {

      if( this.myForm.invalid ) {
        console.log( this.favoForm )
        this.myForm.markAllAsTouched();
        return;
      }

      console.log( 'the form is valid' )

    }

    add() {
      if( this.newFavorite.value.trim() === '' ) return;

      this.favoForm.push( this.fb.control( this.newFavorite.value, Validators.required ) );
      this.newFavorite.setValue('');

    }

    delete(index: number) {
      this.favoForm.removeAt(index);
    }

}
