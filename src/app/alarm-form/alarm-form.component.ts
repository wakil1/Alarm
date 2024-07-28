import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Alarm } from './alarm.model';
import { alarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarm-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './alarm-form.component.html',
  styleUrl: './alarm-form.component.css'

})
export class AlarmFormComponent implements OnInit {

  @Output() shouldGetOut = new EventEmitter<boolean>();
  Hours: string[] = [];
  Hour: string = '12PM';
  Minutes: number[] = [];
  Minute: number = 59;
  Seconds: number[] = [];
  Second: number = 59;
  

  constructor(public myAlarmService: alarmsService){
    
  }



  ngOnInit(): void {


    for (let i = 1; i <= 12; i++) {
      this.Hours.push(`${i}AM`);
    }
    for (let i = 1; i <= 12; i++) {
      this.Hours.push(`${i}PM`);
    }

    for (let i = 1; i < 60; i++) {
      this.Minutes.push(i);
      this.Seconds.push(i);
    }
  }

  onSubmit() {
    if (this.Hour.includes('PM')) { 
      
      this.myAlarmService.addToAlarm({
        hour: parseInt(this.Hour),
        minute: this.Minute,
        second: this.Second,
      });

    }
    else {
      let calibratedHour = this.extractHour(this.Hour);
      if ( calibratedHour === 12){
        calibratedHour = 0 ;
      }
      this.myAlarmService.addToAlarm({
        hour: calibratedHour,
        minute: this.Minute,
        second: this.Second,
      });

    }

    this.shouldGetOut.emit(false);
     
    
  }

   extractHour(timeString: string) {
    const hour = parseInt(timeString.slice(0, -2), 10);
    return hour;
}

  getOut(getOut: boolean) {
    this.shouldGetOut.emit(getOut);
  }

}

