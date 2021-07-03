import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '..//../app/http.service';
import { Hotels } from '..//../classes/hotels';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() countryId: number[]
  @Input() fromDate: Date
  @Input() toDate: Date
  hotels: Hotels[] = [];
  constructor(private httpService: HttpService) {
    this.fromDate=new Date
    this.toDate=new Date
    this.countryId = []
  }

  ngOnInit(): void {
    if (this.fromDate == null || this.toDate == null) {
      this.httpService.getHotels(this.countryId).subscribe((data: any) => this.hotels = data);
    }
    else {
      this.httpService.getHotelsInRange(this.countryId,this.fromDate, this.toDate).subscribe((data: any) => this.hotels = data);
    }
  }

}
