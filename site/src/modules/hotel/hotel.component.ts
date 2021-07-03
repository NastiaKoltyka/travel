import { Component, OnInit, Input} from '@angular/core';

import { HttpService} from '..//../app/http.service';
import {Hotels} from '..//../classes/hotels';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
@Input()countryId:number[]
hotels:Hotels[]=[];
  constructor() {
    this.countryId=[]
   }

  ngOnInit(): void {
    
  }

}
