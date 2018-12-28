import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { InputEditComponent } from './components/input-edit/input-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    InputEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
