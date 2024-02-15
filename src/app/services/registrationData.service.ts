import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../signup/signup.component';            // Importer la classe Person du composant signup

@Injectable({
  providedIn: 'root'
})

export class DataService { 
  private formData = new BehaviorSubject<Person>(new Person()); // Créer un objet BehaviorSubject pour partager les données entre les composants
  formData$ = this.formData.asObservable();                     // Créer un observable pour permettre aux autres composants de s'abonner à ce BehaviorSubject 

  updateFormData(data: Person) {                                // Fonction pour mettre à jour les données du BehaviorSubject
    this.formData.next(data);                                     // Mettre à jour les données du BehaviorSubject avec les données passées en paramètre
  }
}
