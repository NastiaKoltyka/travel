import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, public datepipe: DatePipe) { }
  getCountry() {
    return this.http.get('http://127.0.0.1:3000/api/countries');
  }
  getCountryInRange(from:Date, to:Date){
    return this.http.get(`http://127.0.0.1:3000/api/countries/${this.datepipe.transform(from, 'yyyy-MM-dd')}/${this.datepipe.transform(to, 'yyyy-MM-dd')}/`);
  }
  getHotels(countryId:number[]) {
    let hotelArr = countryId.map(val => `countries[]=${val}`);
    return this.http.get(`http://127.0.0.1:3000/api/hotels?${hotelArr.join('&')}`);
  }
  getHotelsInRange(countryId:number[], from:Date, to:Date){
    let hotelArr = countryId.map(val => `countries[]=${val}`);
    return this.http.get(`http://127.0.0.1:3000/api/hotels/${this.datepipe.transform(from, 'yyyy-MM-dd')}/${this.datepipe.transform(to, 'yyyy-MM-dd')}/?${hotelArr.join('&')}`);
  }
  getTickets(countryId:number[]) {
    let ticketArr = countryId.map(val => `countries[]=${val}`);
    return this.http.get(`http://127.0.0.1:3000/api/tickets/?${ticketArr.join('&')}`);
  }
  getTicketsInRange(countryId:number[], from:Date, to:Date){
    let ticketArr = countryId.map(val => `countries[]=${val}`);
    return this.http.get(`http://127.0.0.1:3000/api/hotels/${this.datepipe.transform(from, 'yyyy-MM-dd')}/${this.datepipe.transform(to, 'yyyy-MM-dd')}/?${ticketArr.join('&')}`);
  }
}

