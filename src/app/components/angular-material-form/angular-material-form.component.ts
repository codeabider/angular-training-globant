import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-form',
  templateUrl: './angular-material-form.component.html',
  styleUrls: ['./angular-material-form.component.css']
})
export class AngularMaterialFormComponent implements OnInit {
  userData: any;
  tableData: any;

  constructor() { }

  ngOnInit() {
    this.userData = {
      name: '',
      city: ''
    };

    this.tableData = {
      name: '',
      city: ''
    };
  }

  showData() {
    this.tableData = this.userData;
  }

  resetData() {
    this.tableData = {
      name: '',
      city: ''
    };

    this.userData = {
      name: '',
      city: ''
    };
  }
}
