import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
 slideerOption = {
    initialSlide: 1,
    loop: true,
   autoplay:1500,
   pager	:true,
   speed:1000
  };
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}
