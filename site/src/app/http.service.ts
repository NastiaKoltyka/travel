import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getCountry() {
    return this.http.get('http://127.0.0.1:3000/api/countries');
  }
  getCountryInRange(from:any, to:any){
    return this.http.get(`http://127.0.0.1:3000/api/countries/${this.dateToString(from)}/${this.dateToString(to)}/`);
  }
  dateToString(date: any){
    return date == null ? null : `${date.year}-${date.month}-${date.day}`;
  }
}
