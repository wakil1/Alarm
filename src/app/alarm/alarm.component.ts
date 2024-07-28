import { Component } from '@angular/core';
import { min, Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { alarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [],
  templateUrl: './alarm.component.html',
  styleUrl: './alarm.component.css'
})
export class AlarmComponent {
  audio: HTMLAudioElement;
  sub: any;
  private subscription : Subscription;
  private otherSub: Subscription | undefined;


  constructor(private alarms: alarmsService) {
    this.audio = new Audio();
    this.audio.src = "audio/alarm1.mp3";

     this.subscription = interval(1000).subscribe(x => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      for (let i = 0; i < alarms.getAllAlarms().length; i++) {
        const alarm = alarms.getAllAlarms()[i];

        // Check if the current time matches the alarm time
        if (alarm.hour === hours && Number(alarm.minute) === minutes && Number(alarm.second) === seconds) {
          this.playSound();
        }


      }

    })
  }



  playSound() {
    this.audio = new Audio();
    this.audio.src = "audio/alarm1.mp3";
    this.otherSub = interval(3000).subscribe(x => {
      this.audio.currentTime = 0;
      this.audio.play();
    });

  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.otherSub?.unsubscribe();
  }
}


