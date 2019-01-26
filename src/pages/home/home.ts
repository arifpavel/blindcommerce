import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  search:string = 'Search Product';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.search);
    console.log('ionViewDidLoad HomePage');
  }

  gotoProduct(){
    this.navCtrl.push('ProductPage');
  }

  searchProduct(productname){
    console.log(this.search)
    console.log(this.navParams.data)

  }
}
