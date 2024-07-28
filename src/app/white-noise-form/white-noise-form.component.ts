import { Component, EventEmitter, inject, Output } from '@angular/core';
import { alarmsService } from './whiteNoise.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-white-noise-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './white-noise-form.component.html',
  styleUrl: './white-noise-form.component.css'
})
export class WhiteNoiseFormComponent {
  @Output() shouldGetOut = new EventEmitter<boolean>();
  private aService = inject(alarmsService);

  whiteNoises: string[]= this.aService.getAllWhiteNoise();
  whiteNoise: string= this.aService.getAllWhiteNoise()[0];
 


  getOut(getOut: boolean) {
    this.shouldGetOut.emit(getOut);
  }

  onSubmit(){

    console.log(this.whiteNoise);

    this.aService.selectedWhiteNoise(this.whiteNoise);

  }


}
