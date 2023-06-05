import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signUpForm: FormGroup;
  buttonClicked: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signUpForm = fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      username: ['', [Validators.required]],
      mobileNum: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      interests: [this.sampleArray],
    });
    // this.interestFormArray = this.signUpForm.controls['interests'] as FormArray;
  }

  foodInterests: string[] = [
    'Filipino',
    'Italian',
    'Mexican',
    'Sushi',
    'Vegetarian',
    'Thai',
    'Indian',
  ];

  onSubmit = () => {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);

      //this.interestFormArray.push(this.sampleArray);
    } else {
      this.buttonClicked = true;
      this.signUpForm.markAllAsTouched();
    }
  };

  sampleArray: string[] = [];
  //foods: string = '';

  checkboxClicked = (event: any, value: any) => {
    //this.interestFormArray.push(new FormControl().value);

    for (let a of value) {
      if (this.sampleArray.includes(a.value)) {
        this.sampleArray.filter((data) => data != a.value);
      } else {
        this.sampleArray.push(a.value);
      }
    }
  };
}
