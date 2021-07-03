import { Component, OnInit, Input } from '@angular/core';


import { HttpService} from '..//../app/http.service';
import {Country} from '..//../classes/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  contries:Country[]=[];

  constructor(private httpService: HttpService) {
    this.fromDate='';
    this.toDate='';
   }

  ngOnInit(): void {
    if(this.fromDate==null||this.toDate==null){
      this.httpService.getCountry().subscribe((data:any) => this.contries=data);
    }
    else{
      this.httpService.getCountryInRange(this.fromDate, this.toDate).subscribe((data:any) => this.contries=data);
    }
  }

}
