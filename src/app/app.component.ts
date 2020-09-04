import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Person } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interview';
  people$: Observable<Person[]>;

  //Please get people list and filter them by age.
  //Get only people which have at lest 25 years and no more than 50
  //Also they name should start with Mr. or Ms. depending on they sex.
  //they should be sorted by age ascending.

  constructor(private service: AppService) {}
}
