import { Register } from './../register/register';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {
       
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  public goRegister(){
    this.navCtrl.push(Register);

  }
  


  
}
