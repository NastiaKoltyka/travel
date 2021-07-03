import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel';
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  country: boolean;
  hotel: boolean;
  ticket: boolean;
  visibleTextAboveUs: boolean;
  countryId:number[]

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate =null;
    this.toDate = null;
    this.visibleTextAboveUs=true;
    this.country=false;
    this.hotel=false;
    this.ticket=false;
    this.countryId=[]

  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  visibleCountry(): void {
    this.visibleTextAboveUs=false;
    this.country=true;
    this.hotel=false;
    this.ticket=false;
  }
  visibleHotel(): void {
    this.visibleTextAboveUs=false;
    this.country=false;
    this.hotel=true;
    this.ticket=false;
  }
  visibleTicket(){
    this.visibleTextAboveUs=false;
    this.country=false;
    this.hotel=false;
    this.ticket=true;
  }
  visibleAboveUs(){
    this.visibleTextAboveUs=true;
    this.country=false;
    this.hotel=false;
    this.ticket=false;
  }
  onChanged(country:number[]){
    this.countryId=country;
}
}
