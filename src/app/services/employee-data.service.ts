import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  personList: Person[];

  constructor() {
    this.personList = [
      {
        id: 1,
        name: 'Mr A',
        age: 15,
        address: 'A/1, Street A',
        email: 'a@somemail.com',
        position: 'Manager'
      },
      {
        id: 2,
        name: 'Ms B',
        age: 23,
        address: 'B/1, Street B',
        email: 'b@somemail.com',
        position: 'Architect'
      },
      {
        id: 3,
        name: 'Mrs C',
        age: 33,
        address: 'C/1, Street C',
        email: 'c@somemail.com',
        position: 'Developer'
      },
      {
        id: 4,
        name: 'Mr D',
        age: 12,
        address: 'D/1, Street D',
        email: 'd@somemail.com',
        position: 'Sr Manager'
      },
      {
        id: 5,
        name: 'Mr E',
        age: 59,
        address: 'E/1, Street E',
        email: 'e@somemail.com',
        position: 'CEO'
      }
    ];
  }

  getPersonList(): Person[] {
    return this.personList;
  }
}
