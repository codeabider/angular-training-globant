import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  template: `<h2>Hello {{ name }}!!</h2>`
})
export class HelloComponent {
  name = 'Harshdeep';
}
