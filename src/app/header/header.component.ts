import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
   @Output() navigationChanged = new EventEmitter<string>();

  onNavClick(page: string) {
    this.navigationChanged.emit(page)
  }

}
