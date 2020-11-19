import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent {
  @Input() person: Person;
}

export interface Person {
  name: string;
  age: number;
}


