import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularMaterialFormModule } from './components/angular-material-form/angular-material-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
