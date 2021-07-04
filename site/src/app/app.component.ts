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
  modal: boolean;
  visibleTextAboveUs: boolean;
  range: FormGroup;
  countryId: number[];
  hotelIds: number[];
  ticketIds: number[];
  modalMessage: string;
  modalAccept:boolean;
  modalSuccess:boolean;

  constructor() {
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
    this.visibleTextAboveUs = true;
    this.country = false;
    this.hotel = false;
    this.ticket = false;
    this.countryId = [];
    this.hotelIds = [];
    this.ticketIds = [];
    this.modal = false;
    this.modalMessage = '';
    this.modalAccept=false;
    this.modalSuccess=false;
  }
  visibleCountry(): void {
    this.visibleTextAboveUs = false;
    this.country = true;
    this.hotel = false;
    this.ticket = false;
  }
  visibleHotel(): void {
    if (this.countryId.length > 0) {
      this.visibleTextAboveUs = false;
      this.country = false;
      this.hotel = true;
      this.ticket = false;
    } else {
      this.modal = true;
      this.modalMessage = 'Please, choose the country first!';
    }
  }
  visibleTicket() {
    if (this.countryId.length > 0 && this.hotelIds.length > 0) {
      this.visibleTextAboveUs = false;
      this.country = false;
      this.hotel = false;
      this.ticket = true;
    } else {
      this.modal = true;
      this.modalMessage = 'Please, choose the country and the hotel first!';
    }
  }
  visibleAboveUs() {
    this.visibleTextAboveUs = true;
    this.country = false;
    this.hotel = false;
    this.ticket = false;
  }
  onCountryChanged(country: number[]) {
    this.countryId = country;
  }
  onHotelChanged(hotels: number[]) {
    this.hotelIds = hotels;
  }
  onTicketChanged(tickets: number[]) {
    this.ticketIds = tickets;
    if(this.ticketIds.length > 0){
      this.modalAccept=true;
    }
  }
  closeModal() {
    this.modal = false;
    this.modalAccept=false;
  }
  pickerChanged(){
    this.visibleTextAboveUs = true;
    this.country = false;
    this.hotel = false;
    this.ticket = false;
    this.countryId = [];
    this.hotelIds = [];
    this.ticketIds = [];
  }
  openSuccessModal(){
    this.modalSuccess=true;
  }
  closeSuccessModal() {
    this.modalSuccess=false;
    this.modalAccept=false;
    this.pickerChanged()
  }
}
