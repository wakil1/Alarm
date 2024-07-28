
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable({providedIn: 'root'})
export class whiteNoiseService {

    private whiteNoiseSelectionSubject = new BehaviorSubject<string>('');

    whiteNoiseSelection$ = this.whiteNoiseSelectionSubject.asObservable();


whiteNoise: string[]=['whiteNoise'];


    getAllWhiteNoise() {
        return this.whiteNoise;
    }

    selectedWhiteNoise(whiteNoiseSelection: string) {
        this.whiteNoiseSelectionSubject.next(whiteNoiseSelection);
      }

}

