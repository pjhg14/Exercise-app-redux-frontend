import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }

  open():void {
    this.modalService.openModal()
  }

}
