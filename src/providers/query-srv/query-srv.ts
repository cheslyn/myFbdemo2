import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { model_1 } from './query_model' ;
import firebase, { database } from 'firebase';

@Injectable()
export class QuerySrvProvider {
  private ItemRef = this.db.list<model_1>
  ('items') ; //maps to  https://myfbdemo-38341.firebaseio.com/items

  constructor(private db: AngularFireDatabase) {
  }

  getItems(){
    return this.ItemRef;
            }
}
