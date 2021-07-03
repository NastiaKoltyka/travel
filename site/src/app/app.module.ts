import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryComponent } from '..//modules/country/country.component';
import { HotelComponent } from '..//modules/hotel/hotel.component';
import { TicketComponent } from '..//modules/ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    HotelComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDatepickerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

