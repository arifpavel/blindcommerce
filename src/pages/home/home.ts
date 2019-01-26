import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  search:string = 'Search Product';
  public products:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getAllProduct();
  }

  ionViewDidLoad() {
    console.log(this.search);
    console.log('ionViewDidLoad HomePage');
  }

  gotoProduct(id){
    console.log(this.products.filter( item => item.id == id))
    this.navCtrl.push('ProductPage', {
      data : this.products.filter( item => item.id == id)
    });
  }

  searchProduct(productname){
    console.log(this.search)
    console.log(this.navParams.data)

  }
  getAllProduct(){
    return this.products = [
      {
        'id' : 1,
        'name' : 'MI 8',
        'price' : 430,
        'brand' : 'Xiaomi',
        'img' : '1.png',
        'description': 'OS: Android 8, CPU: 1.2GHz, Ram: 6GB, Rom: 64GB'
      },
      {
        'id' : 2,
        'name' : 'Honor 7',
        'price' : 340,
        'brand' : 'Huawei',
        'img' : '1.png',
        'description': 'OS: Android 8, CPU: 1.2GHz, Ram: 3GB, Rom: 32GB'
      }
    ]
  }
}
