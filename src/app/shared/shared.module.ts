import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalOpenDirective } from './modal/modal-open.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalComponent,
    ModalOpenDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // Built-in
    CommonModule,
    FormsModule,

    // Added
    ModalComponent,
    ModalOpenDirective
  ]
})
export class SharedModule { }
