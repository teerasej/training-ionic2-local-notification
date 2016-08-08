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
    let scheduledTime = currentDate.toLocaleTimeString()
    let targetDate = new Date(currentDate.setMinutes(currentDate.getMinutes() + 2));
    console.log(scheduledTime);
    console.log(targetDate.toLocaleTimeString());

    LocalNotifications.schedule({
      id: 1,
      title: "2 Minute Notification",
      // Show time that notification has been scheduled.
      text: "Scheduled " + scheduledTime,
      at: targetDate 
    });
  }
}
