import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';


@Injectable()
export class QueryProvider {

  public eventListRef: Reference; 

  constructor(public http: HttpClient) {
    console.log('Hello QueryProvider Provider');
  }

  getEventList(): Reference {
    return this.eventListRef;
  }

}
