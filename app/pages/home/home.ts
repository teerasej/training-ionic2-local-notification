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
    // Get current date
    

    // Keep locale time string in variable
    

    // Get current minute plus with 2, and set to currentDate
   

    // Create new date object with 'plus 2 minutes' data
    
    
    // Log value
    // console.log(scheduledTime);
    // console.log(targetDate.toLocaleTimeString());

    LocalNotifications.schedule({
      id: 1,
      title: "2 Minute Notification",
      // Show time that notification has been scheduled.
      text: "Scheduled ",
      // at: 
    });
  }
}
