import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',

})
export class BasicsComponent {

  @ViewChild('basicForm') basicForm! :NgForm;

  initForm = {
    product: '',
    price : 0,
    amount: 0
  }

  nameValid(): boolean {
    return this.basicForm?.controls['product']?.invalid &&
    this.basicForm.controls['product']?.touched
  }

  priceValid(): boolean {

    return this.basicForm?.controls['price']?.value <= 0 && this.basicForm.controls['price']?.touched

  }

  save() {
    console.log( 'posteo correcto' )

    this.basicForm.resetForm({
      price: 0,
      amount: 0
    })
  }

}
