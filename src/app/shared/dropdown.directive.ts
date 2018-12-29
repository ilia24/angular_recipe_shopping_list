import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') menuOpen: boolean = false;

  @HostListener('click') toggleMenu(eventData: Event){
    this.menuOpen = !this.menuOpen
  }

  constructor() { }

  ngOnInit() {
  }

}
