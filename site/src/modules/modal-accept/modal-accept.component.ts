import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpService } from '..//../app/http.service';

@Component({
  selector: 'app-modal-accept',
  templateUrl: './modal-accept.component.html',
  styleUrls: ['./modal-accept.component.css']
})
export class ModalAcceptComponent implements OnInit {
  @Output() closeAcceptModal = new EventEmitter();
  @Output() openSuccessModal = new EventEmitter();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
  closeModalAccept(){
    this.closeAcceptModal.emit();
  }
  openModalSuccess(){
      this.httpService.placeOrder().subscribe((data: any) => this.openSuccessModal.emit());
  }

}
