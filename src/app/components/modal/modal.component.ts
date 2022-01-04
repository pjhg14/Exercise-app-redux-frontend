import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  display$!: Observable<boolean>;

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    console.log("Modal init")
    this.display$ = this.modalService.watch()
  }

  ngOnDestroy(): void {
    console.log("Modal destroyed")
  }

  close(): void {
    this.modalService.closeModal()
  }

  confirm(): void {
    
  }

}
