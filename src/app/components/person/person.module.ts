import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MouseEventsDirective } from '../../directives/mouse-events.directive';
import { PersonComponent } from './person.component';
import { EditPersonComponent } from '../edit-person/edit-person.component';

import { MatButtonModule, MatTableModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatOptionModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonComponent,
    EditPersonComponent,
    MouseEventsDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
