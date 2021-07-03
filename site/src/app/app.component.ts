import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel';
  country: boolean;
  hotel: boolean;
  ticket: boolean;
  visibleTextAboveUs: boolean;
  range: FormGroup;
  countryId: number[];
  

  constructor() {
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
    this.visibleTextAboveUs = true;
    this.country = false;
    this.hotel = false;
    this.ticket = false;
    this.countryId = []

  }
  visibleCountry(): void {
    this.visibleTextAboveUs = false;
    this.country = true;
    this.hotel = false;
    this.ticket = false;
  }
  visibleHotel(): void {
    this.visibleTextAboveUs = false;
    this.country = false;
    this.hotel = true;
    this.ticket = false;
  }
  visibleTicket() {
    this.visibleTextAboveUs = false;
    this.country = false;
    this.hotel = false;
    this.ticket = true;
  }
  visibleAboveUs() {
    this.visibleTextAboveUs = true;
    this.country = false;
    this.hotel = false;
    this.ticket = false;
  }
  onChanged(country: number[]) {
    this.countryId = country;
  }
}
