import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  @Input() empDetails: Person;
  @Output() dataUpdated = new EventEmitter<FormGroup>();

  empDetailsForm: FormGroup;
  positions: string[] = ['Developer', 'Tester', 'Manager', 'Sr Manager', 'Architect', 'CEO'];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.empDetailsForm = this._formBuilder.group({
      id: [this.empDetails.id],
      name: [this.empDetails.name, Validators.required],
      age: [this.empDetails.age, Validators.required],
      address: [this.empDetails.address, Validators.required],
      email: [this.empDetails.email, Validators.required],
      position: [this.empDetails.position]
    });
  }

  updateData() {
    this.dataUpdated.emit(this.empDetailsForm.value);
  }

}
