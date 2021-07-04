import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CountryComponent } from '..//modules/country/country.component';
import { HotelComponent } from '..//modules/hotel/hotel.component';
import { TicketComponent } from '..//modules/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { ModalComponent } from '../modules/modal/modal.component';
import { ModalAcceptComponent } from '../modules/modal-accept/modal-accept.component';
import { ModalSuccessComponent } from '../modules/modal-success/modal-success.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    HotelComponent,
    TicketComponent,
    ModalComponent,
    ModalAcceptComponent,
    ModalSuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

