import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup =  this.fb.group({
    gen: ['M', Validators.required ],
    notification: [false, Validators.required ],
    condition: [false, Validators.requiredTrue]
  })

  person = {
    gen: 'F',
    notification: false
  }

  constructor(
    private readonly fb:FormBuilder
  )
  {}

  ngOnInit(): void {
      this.myForm.reset( this.person )

      this.myForm.valueChanges.subscribe(
        form => {
          delete form.condition
          this.person = form
        }
      )
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.condition;

  }
}
