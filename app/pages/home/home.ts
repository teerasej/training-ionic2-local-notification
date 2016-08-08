import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  scheduleNotification() {
    LocalNotifications.schedule({
      id: 1,
      title: "Oh, yeah!",
      text: "นี่คือตัวแจ้งเตือนแรกของเรา"
    });
  }
}
