
import { Injectable } from "@angular/core";



@Injectable({providedIn: 'root'})
export class alarmsService {

whiteNoiseSelection:string='';

whiteNoise: string[]=['water','milk','towl','backyard'];


    getAllWhiteNoise() {
        return this.whiteNoise;
    }

    selectedWhiteNoise(whiteNoiseSelection: string) {
        this.whiteNoiseSelection = whiteNoiseSelection;

    }

}

