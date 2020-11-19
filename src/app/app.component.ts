import { Component } from '@angular/core';
import { Person } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDetection';
  public person: Person = {
    name: 'Naveen Camera Men',
    age: 23
  };

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }

}
