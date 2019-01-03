import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './Hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent
  ]
})
export class HelloModule { }
