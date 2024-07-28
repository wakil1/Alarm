import { Component, getNgModuleById, inject, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AlarmFormComponent } from './alarm-form/alarm-form.component';
import { WhiteNoiseFormComponent } from './white-noise-form/white-noise-form.component';
import { AlarmComponent } from './alarm/alarm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhiteNoiseComponent } from "./white-noise/white-noise.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CurrentTimeComponent, NavbarComponent, AlarmFormComponent, WhiteNoiseFormComponent, AlarmComponent, WhiteNoiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'AlarmApp';
  isClickedAlarm: boolean = false;
  isClickedWhiteNoise: boolean = false;

  clickedAlarm() {
    this.isClickedAlarm = true;
  }
  leaveComponent(getOut: boolean) {
    this.isClickedAlarm = getOut;
    this.isClickedWhiteNoise = getOut;
  }
  clickedWhiteNoise() {
    this.isClickedWhiteNoise = true;
  }

}
