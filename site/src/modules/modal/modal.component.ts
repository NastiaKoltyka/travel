import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter();
  constructor() { 
    this.message = '';
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit();
  }
}
