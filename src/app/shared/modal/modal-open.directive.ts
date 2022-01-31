import { Directive, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[ermModalOpen]'
})
export class ModalOpenDirective {

  @HostListener('click') onClick() {
    this.modalService.openModal()
  }

  constructor(
    private modalService: ModalService  
  ) { }

}
