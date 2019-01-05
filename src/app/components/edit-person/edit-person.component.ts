import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../interfaces/person';
import { ageValidator } from '../shared/age.validator';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  @Input() empDetails: Person;

  @Output() dataUpdated = new EventEmitter<FormGroup>();

  empDetailsForm: FormGroup;
  positions: string[] = ['Developer', 'Tester', 'Manager', 'Sr Manager', 'Architect', 'CEO', 'N/A'];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.empDetailsForm = this._formBuilder.group({
      id: [this.empDetails ? this.empDetails.id : 0],
      name: [this.empDetails ? this.empDetails.name : '', Validators.required],
      age: [this.empDetails ? this.empDetails.age : 18,
        [Validators.required, ageValidator(18)]
      ],
      address: [this.empDetails ? this.empDetails.address : '', Validators.required],
      email: [this.empDetails ? this.empDetails.email : '',
        [Validators.required, Validators.email]
      ],
      position: [this.empDetails ? this.empDetails.position : 'N/A']
    });
  }

  get name() {
    return this.empDetailsForm.get('name');
  }

  get age() {
    return this.empDetailsForm.get('age');
  }

  get address() {
    return this.empDetailsForm.get('address');
  }

  get email() {
    return this.empDetailsForm.get('email');
  }

  updateData() {
    this.dataUpdated.emit(this.empDetailsForm.value);
  }

  resetData(fillDefault?: string) {
    this.empDetailsForm.patchValue({
      name: fillDefault ? 'John Doe' : '',
      age: fillDefault ? 21 : null,
      address: fillDefault ? 'XYZ Corner St' : '',
      email: fillDefault ? 'j@doe.net' : '',
      position: 'N/A'
    });
  }

  getErrorMsg(errors: any) {
    if (errors) {
      return errors.required ? 'This field is required!' :
        errors.email ? 'Please enter a valid email ID!' :
        errors.underAge ? 'Age must be atleast 18 years!' : '';
    }
  }
}
