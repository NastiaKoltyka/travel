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
  @Output() onChanged = new EventEmitter<number[]>();
  tickets: Ticket[] = [];
  constructor(private httpService: HttpService) {
    this.fromDate = new Date;
    this.toDate = new Date;
    this.countryId = [];
  }

  ngOnInit(): void {
    if (this.fromDate == null || this.toDate == null) {
      this.httpService.getTickets(this.countryId).subscribe((data: any) => this.tickets = data);
    }
    else {
      this.httpService.getTicketsInRange(this.countryId, this.fromDate, this.toDate).subscribe((data: any) => this.tickets = data);
    }
  }

  check() {
    let checkedTickets: Ticket[] = this.tickets.filter(ticket => ticket.check == true);
    this.onChanged.emit(checkedTickets.map(val => val.id));
  }
}
