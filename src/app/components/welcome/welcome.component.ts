import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-component',
  template: `<h2>Welcome to {{ trainingName }}!</h2>`
})
export class WelcomeComponent {
  trainingName = 'Angular Training';
}
