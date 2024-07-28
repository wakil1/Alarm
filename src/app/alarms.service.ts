
import { Injectable } from "@angular/core";

import { Alarm } from "./alarm-form/alarm.model";


@Injectable({providedIn: 'root'})
export class alarmsService {

alarms: Alarm[] = [];



    addToAlarm(alarm: Alarm) {
        this.alarms.push(alarm);
    }

    getAllAlarms() {
        return this.alarms;
    }


}

