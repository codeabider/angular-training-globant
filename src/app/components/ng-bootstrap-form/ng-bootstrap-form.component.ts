import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-bootstrap-form',
  templateUrl: './ng-bootstrap-form.component.html',
  styleUrls: ['./ng-bootstrap-form.component.css']
})
export class NgBootstrapFormComponent implements OnInit {
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
