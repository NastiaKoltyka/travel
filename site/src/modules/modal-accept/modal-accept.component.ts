import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-accept',
  templateUrl: './modal-accept.component.html',
  styleUrls: ['./modal-accept.component.css']
})
export class ModalAcceptComponent implements OnInit {
  @Output() closeAcceptModal = new EventEmitter();
  @Output() openSuccessModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  closeModalAccept(){
    this.closeAcceptModal.emit();
  }
  openModalSuccess(){
    this.openSuccessModal.emit();
  }

}
