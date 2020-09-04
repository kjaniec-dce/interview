import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './models';

@Injectable()
export class AppService {
  people$: Observable<Person[]>;
  _people$: BehaviorSubject<Person[]>;

  constructor() {}

  getPeople() {
    //Get People list as observable. Please use BehaviorSubject for that.
  }
}
