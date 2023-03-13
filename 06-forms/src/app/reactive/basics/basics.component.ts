import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(1500),
  //   stock: new FormControl(5)
  // })

  ngOnInit(): void {
      this.myForm.reset({
        name: '',
        price: 0,
        stock: 0
      })
  }

  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.minLength(3) ]  ],
    price: [ , [ Validators.required, Validators.min(1) ] ],
    stock: [ ,  [ Validators.required, Validators.min(1) ]  ]
  })

  constructor(
    private readonly fb: FormBuilder
  ) {}

    validateName( field: string ) {
      return this.myForm.controls[field].errors && this.myForm.controls[field].touched
    }

    save() {

      if ( this.myForm.invalid ) {
        this.myForm.markAllAsTouched()
        return;
      }

      console.log(this.myForm.value)
      this.myForm.reset()
    }

}
