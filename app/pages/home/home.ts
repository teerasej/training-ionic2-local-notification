import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  showAlert() {
    let currentDate = new Date();
    let targetDate = new Date(currentDate.getMinutes() + 1);

    LocalNotifications.schedule({
      id: 1,
      text: "1 Minute Notification",
      at: targetDate
    });
  }
}
