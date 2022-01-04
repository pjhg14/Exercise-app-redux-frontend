import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isOpen = false

  constructor() { }

  ngOnInit(): void { }

  toggleOpen(): void {
    this.isOpen = !this.isOpen
    // console.log(this.isOpen)
  }

}
