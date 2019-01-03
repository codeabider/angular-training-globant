import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
// note: if we do not export the interface, we do not need to explicitly import it
// (angular checks for a TS file to look for inteface definition)

const PERSON_DATA: Person[] = [
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

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personsList: Person[];
  selectedPerson: Person;
  selectedRowIndex: number;
  showEditableDetails = false;
  displayedColumns: string[] = ['serial', 'name', 'age', 'address', 'email', 'position', 'edit'];

  constructor() { }

  ngOnInit() {
    this.personsList = PERSON_DATA;
  }

  editDetails(person: Person) {
    this.showEditableDetails = true;
    this.selectedPerson = person;
  }

  onDataUpdate(updatedDetails: Person) {
    this.personsList[updatedDetails.id - 1] = updatedDetails;
    this.selectedRowIndex = updatedDetails.id;
    setTimeout(() => {
      this.selectedRowIndex = -1;
    }, 5000);
    this.personsList = [...this.personsList];
    // note: better way to do this is by using Observable stream of data arrays,
    // since angular mat table doesn't update simply when dataSource channges
    this.showEditableDetails = false;
  }
}
