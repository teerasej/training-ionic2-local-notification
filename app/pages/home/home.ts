import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';
// import { Device } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  scheduleNotification() {

    // Schudule notification in next 2 minutes
    let currentDate = new Date();
    let scheduledTime = currentDate.toLocaleTimeString()
    console.log(currentDate.toLocaleTimeString());
    let targetDate = new Date(currentDate.setMinutes(currentDate.getMinutes() + 2));
    console.log(targetDate.toLocaleTimeString());


    // Set sound's file path
    // let soundFilePath = 'file://';

    // if (Device.device.platform == 'Android') {
    //   soundFilePath += 'sound.mp3';
    // } else {
    //   soundFilePath += 'sound.caf';
    // }

    // Schedule notification
    LocalNotifications.schedule({
      id: 1,
      title: "2 Minute Notification",
      text: "Scheduled " + scheduledTime,
      at: targetDate,
      // sound: soundFilePath
    })
  }
}
