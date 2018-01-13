import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuerySrvProvider } from '../../providers/query-srv/query-srv';
import { Observable } from 'rxjs/Observable' ;
import { model_1 } from '../../providers/query-srv/query_model';



@IonicPage()
@Component({
  selector: 'page-query',
  templateUrl: 'query.html',
})
export class QueryPage {
  
  itemlst: Observable<model_1[]>;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fbItems: QuerySrvProvider ) {

                this.itemlst = this.fbItems
                .getItems()
                .snapshotChanges()
                .map( changes => {
                  return changes.map( c => ({
                    key: c.payload.key,
                    ...c.payload.val(),
                  }));
                })

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryPage');
  }

}
