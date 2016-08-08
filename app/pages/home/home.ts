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
    let currentDate = new Date();
    let scheduledTime = currentDate.toLocaleTimeString();
    let next2Minutes = currentDate.setMinutes(currentDate.getMinutes() + 2);
    let targetDate = new Date(next2Minutes);
    console.log(scheduledTime);
    console.log(targetDate.toLocaleTimeString());

    LocalNotifications.schedule({
      id: 1,
      title: "2 Minute Notification",
      text: "Scheduled " + scheduledTime,
      at: targetDate
    });
  }
}
