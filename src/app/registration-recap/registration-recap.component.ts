import { Component, OnInit } from '@angular/core';
import { Person } from '../signup/signup.component';
import { DataService } from '../services/registrationData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-recap',
  templateUrl: './registration-recap.component.html',
  styleUrls: ['./registration-recap.component.css']
})

export class RegistrationRecapComponent implements OnInit {
  person: Person | null = null;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // Souscrire au service pour recevoir les mises à jour des données
    this.dataService.formData$.subscribe((data: Person) => {
      this.person = data;
    });
  }

  confirmRegistration() {
    // Logique pour confirmer l'enregistrement
    console.log('ConfirmResgistration button clicked');
  }

  goBackToSignup() {
    this.router.navigate(['signup']);
    console.log('BackToSignup button clicked');
  }
}
