import { Component, EventEmitter, inject, Output } from '@angular/core';
import { whiteNoiseService } from './whiteNoise.service';
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
  private aService = inject(whiteNoiseService);

  whiteNoises: string[]= this.aService.getAllWhiteNoise();
  whiteNoise: string= this.aService.getAllWhiteNoise()[0];
 


  getOut(getOut: boolean) {
    this.shouldGetOut.emit(getOut);
  }

  onSubmit(){
    this.aService.selectedWhiteNoise(this.whiteNoise);
    this.shouldGetOut.emit(false);

  }


}
