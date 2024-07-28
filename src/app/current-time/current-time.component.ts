import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  standalone: true,
  imports: [],
  templateUrl: './current-time.component.html',
  styleUrl: './current-time.component.css'
})
export class CurrentTimeComponent implements OnInit {
  currentTime: string = '';
  currentDate: string= '';

  isPm:boolean = false;


  ngOnInit(): void {
    this.updateTime();
  }


  updateTime(): void {
    setInterval(() => {
    const now = new Date();
    let hours = parseInt(now.getHours().toString().padStart(2, '0'));
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const Year = now.getFullYear().toString().padStart(2, '0');
    const month = now.getMonth().toString().padStart(2, '0');
    const day = now.getDay().toString().padStart(2, '0');

    if(hours > 12){
      this.isPm = true;
      hours = hours - 12;
    }

    this.currentTime = `${hours}:${minutes}:${seconds}`;
    this.currentDate=  `${month}-${day}-${Year}`;

    });

}
}
