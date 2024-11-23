import { Component } from '@angular/core';
import { ContactButtonComponent } from "../contact-button/contact-button.component";
import { FormContactComponent } from "../form-contact/form-contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactButtonComponent, CommonModule, FormContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isModalOpen = false;

  showModal() {
    this.isModalOpen = true;
  }

  hideModal() {
    this.isModalOpen = false;
  }
}
