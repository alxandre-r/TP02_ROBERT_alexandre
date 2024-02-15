import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/registrationData.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignUpComponent {
  person: Person = new Person();
  formError: boolean = false;
  errorMessage: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  onSignUp(): void {
    if (this.isFormValid() == true) {
      this.ToRegistrationRecap();
    } else {
      this.getErrorMessage();
    }
  }

  isFormValid(): boolean {
    this.getErrorMessage();
    if (this.errorMessage == '')
      return true;
    else
      return false;
  }

  // Function to go to the registration recap page and send the data to the service
  ToRegistrationRecap() {
    this.dataService.updateFormData(this.person);
    this.router.navigate(['registration-recap']);
  }

  // Function to display an error message if the form is not valid
  getErrorMessage() {
    this.errorMessage = '';
    if (this.person.firstName === '') {
      this.formError = true;
      this.errorMessage = 'First name is required';
    }
    else if (this.person.lastName === '') {
      this.formError = true;
      this.errorMessage = 'Last name is required';
    }
    else if (this.person.phone === '') {
      this.formError = true;
      this.errorMessage = 'Phone number is required';
    }
    else if (this.person.email === '') {
      this.formError = true;
      this.errorMessage = 'Email is required';
    }
    else if (this.person.postalCode === '') {
      this.formError = true;
      this.errorMessage = 'Postal code is required';
    }
    else if (this.person.city === '') {
      this.formError = true;
      this.errorMessage = 'City is required';
    }
    else if (this.person.country === '') {
      this.formError = true;
      this.errorMessage = 'Country is required';
    }
    else if (this.person.gender === '') {
      this.formError = true;
      this.errorMessage = 'Gender is required';
    }
    else if (this.person.login === '') {
      this.formError = true;
      this.errorMessage = 'Login is required';
    }
    else if (this.person.password === '') {
      this.formError = true;
      this.errorMessage = 'Password is required';
    }
  }
}

export class Person {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  postalCode: string = '';
  city: string = '';
  country: string = '';
  gender: string = '';
  login: string = '';
  password: string = '';
}