import {Component, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

// the second parameter 'fr' is optional
registerLocaleData(localeDe, 'de');

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker-basic.html',
  styleUrls: [ './scss/datepicker.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class NgbdDatepickerBasic {

  model: NgbDateStruct;
  currentDate: Date;
  date: {
    day: number
    year: number,
    month: number
  };

  constructor(private calendar: NgbCalendar) {
    this.initDates();
  }

  onDateSelect(e){
    this.setCurrentDate(this.model.year, this.model.month, this.model.day);
  }

  initDates() {
    this.model = this.calendar.getToday();
    this.setCurrentDate(this.model.year, this.model.month, this.model.day);
  }

  setCurrentDate(year, month, day){
    this.currentDate = new Date(year, month, day);
  }
}
