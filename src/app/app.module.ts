import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBootstrapFormModule } from './components/ng-bootstrap-form/ng-bootstrap-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgBootstrapFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
