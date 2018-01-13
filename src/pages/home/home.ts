import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QueryPage } from '../query/query';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  OpenQry() {
    this.navCtrl.push(QueryPage);
  }
}
