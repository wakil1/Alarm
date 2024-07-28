import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { alarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [],
  templateUrl: './alarm.component.html',
  styleUrl: './alarm.component.css'
})
export class AlarmComponent implements OnDestroy {
  audio: HTMLAudioElement;
  private subscription: Subscription;
  private otherSub: Subscription | undefined;


  constructor(private alarms: alarmsService) {
    this.audio = new Audio();
    this.audio.src = "audio/alarm1.mp3";

    this.subscription = interval(1000).subscribe(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
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
    this.otherSub = interval(3000).subscribe(() => {
      this.audio.currentTime = 0;
      this.audio.play();
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.otherSub?.unsubscribe();
  }
}


