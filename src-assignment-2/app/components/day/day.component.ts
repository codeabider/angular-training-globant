import { Component } from '@angular/core';

@Component({
  selector: 'app-day-component',
  template: `<h2>Today is {{ currentDay }}.</h2>`
})
export class DayComponent {
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  date = new Date();
  currentDay = this.days[this.date.getDay()];
}
