import { Component } from '@angular/core';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrl: './general-form.component.scss'
})
export class GeneralFormComponent {

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
