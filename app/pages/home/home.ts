import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';
import { Device } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  showAlert() {

    let soundFilePath = 'file://';

    if(Device.device.platform == 'Android'){
      soundFilePath += 'sound.mp3';
    } else {
      soundFilePath += 'sound.caf';
    }

    LocalNotifications.schedule({
      id: 1,
      text: "Single Notification",
      // Badge number for iOS
      // Notification number for Android
      badge: 3,
      sound: soundFilePath
    });
  }
}
