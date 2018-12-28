import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-edit',
  templateUrl: './input-edit.component.html',
  styleUrls: ['./input-edit.component.css']
})
export class InputEditComponent implements OnInit {
  isBeingEdited = false;
  initialVal = 'Hey!!';

  constructor() { }

  ngOnInit() {
  }

  onInputChange() {
    this.isBeingEdited = true;
  }

  onFocusOut() {
    this.isBeingEdited = false;
  }

}
