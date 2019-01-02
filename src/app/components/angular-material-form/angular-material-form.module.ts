import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { AngularMaterialFormComponent } from './angular-material-form.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AngularMaterialFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    AngularMaterialFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AngularMaterialFormModule { }
