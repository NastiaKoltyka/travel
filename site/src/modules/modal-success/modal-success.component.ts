import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {
  @Output() modalSuccess = new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
  }

  closeModalSuccess(){
    this.modalSuccess.emit();
  }

}
