import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { HttpService } from '..//../app/http.service';
import { Country } from '..//../classes/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() countryId: number[];
  @Output() onChanged = new EventEmitter<number[]>();
  contries: Country[] = [];
  page = 1;
  pageSize =10;

  constructor(private httpService: HttpService) {
    this.fromDate = '';
    this.toDate = '';
    this.countryId = [];
  }

  ngOnInit(): void {
    if (this.fromDate == null || this.toDate == null) {
      this.httpService.getCountry().subscribe((data: any) => this.fillCountries(data));
    }
    else {
      this.httpService.getCountryInRange(this.fromDate, this.toDate).subscribe((data: any) => this.fillCountries(data));
    }
  }

  fillCountries(data: Country[]) {
    this.contries = data;
    this.contries.forEach(country => {
      country.check = this.countryId.includes(country.id);
    });
  }

  check() {
    let checkedCountries: Country[] = this.contries.filter(country => country.check == true);
    this.onChanged.emit(checkedCountries.map(val => val.id));
  }
  

}
