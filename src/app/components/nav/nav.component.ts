import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from "../form-contact/form-contact.component";
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormContactComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isScrolled = false;
  isMenuOpen = false;
  isModalOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  showModal() {
    this.isModalOpen = true;
  }

  hideModal() {
    this.isModalOpen = false;
  }
}
