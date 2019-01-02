import { Component, OnInit } from '@angular/core';
// import { Person } from '../../interfaces/person';
// note: if we do not export the interface, we do not need to explicitly import it
// (angular checks for a TS file to look for inteface definition)

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personsList: Person[] = [
    {
      id: 1,
      name: 'Mr A',
      age: 15,
      address: 'A/1, Street A',
      email: 'a@somemail.com',
      isGraduate: false
    },
    {
      id: 2,
      name: 'Ms B',
      age: 23,
      address: 'B/1, Street B',
      email: 'b@somemail.com',
      isGraduate: true
    },
    {
      id: 3,
      name: 'Mrs C',
      age: 33,
      address: 'C/1, Street C',
      email: 'c@somemail.com',
      isGraduate: true
    },
    {
      id: 4,
      name: 'Mr D',
      age: 12,
      address: 'D/1, Street D',
      email: 'd@somemail.com',
      isGraduate: false
    },
    {
      id: 5,
      name: 'Mr E',
      age: 59,
      address: 'E/1, Street E',
      email: 'e@somemail.com',
      isGraduate: false
    }
  ];

  showAll = true;

  constructor() { }

  ngOnInit() {
  }

  showFilteredList() {
    this.showAll = !this.showAll;
    this.personsList = this.personsList.filter((person) => person.isGraduate);
  }

}
