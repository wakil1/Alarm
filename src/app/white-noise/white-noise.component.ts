import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { whiteNoiseService } from '../white-noise-form/whiteNoise.service';

@Component({
  selector: 'app-white-noise',
  standalone: true,
  imports: [],
  templateUrl: './white-noise.component.html',
  styleUrl: './white-noise.component.css'
})
export class WhiteNoiseComponent implements OnDestroy {

  audio: HTMLAudioElement;
  private otherSub: Subscription | undefined;


  constructor(private whiteNoiseS: whiteNoiseService) {
    this.audio = new Audio();
    this.audio.src = "whiteNoise/01-White-Noise.mp3";
    this.playSound();
  }

  playSound() {

    this.whiteNoiseS.whiteNoiseSelection$.subscribe((newValuePotential) => {
       if (newValuePotential !== '') {
        this.otherSub = timer(0, 590000).subscribe(() => {
          this.audio.currentTime = 0;
          this.audio.play();
        });
      }
    })

      // if (this.whiteNoiseS.whiteNoiseSelection !== '') {
      //   this.otherSub = timer(0, 590000).subscribe(() => {
      //     this.audio.currentTime = 0;
      //     this.audio.play();
      //   });
      // }
  }


  ngOnDestroy() {
    this.otherSub?.unsubscribe();
  }

}
