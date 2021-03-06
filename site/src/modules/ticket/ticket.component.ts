import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '..//../app/http.service';

import { Ticket } from '..//../classes/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() countryId: number[];
  @Input() fromDate: Date;
  @Input() toDate: Date;
  @Input() ticketIds: number[];
  @Output() onChanged = new EventEmitter<number[]>();
  page = 1;
  pageSize =10;
  tickets: Ticket[] = [];
  constructor(private httpService: HttpService) {
    this.fromDate = new Date;
    this.toDate = new Date;
    this.countryId = [];
    this.ticketIds = [];
  }

  ngOnInit(): void {
    if (this.fromDate == null || this.toDate == null) {
      this.httpService.getTickets(this.countryId).subscribe((data: any) => this.fillTickets(data));
    }
    else {
      this.httpService.getTicketsInRange(this.countryId, this.fromDate, this.toDate).subscribe((data: any) => this.fillTickets(data));
    }
  }
  fillTickets(data:Ticket[]) {
    this.tickets = data;
    this.tickets.forEach(ticket => {
      ticket.check = this.ticketIds.includes(ticket.id);
    });
  }

  check() {
    let checkedTickets: Ticket[] = this.tickets.filter(ticket => ticket.check == true);
    this.onChanged.emit(checkedTickets.map(val => val.id));
  }
}
