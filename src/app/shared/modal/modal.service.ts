import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() {}

  watch(): Observable<boolean> {
    return this.display.asObservable()
  }

  openModal(): void {
    this.display.next(true)
  }

  closeModal(): void {
    this.display.next(false)
  }

  confirm(): void {
    
  }
}
