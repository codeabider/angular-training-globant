import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgBootstrapFormComponent } from './ng-bootstrap-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgBootstrapFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [NgBootstrapFormComponent]
})
export class NgBootstrapFormModule { }
