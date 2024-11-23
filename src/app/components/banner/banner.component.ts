import { Component } from '@angular/core';
import { ContactButtonComponent } from "../contact-button/contact-button.component";
import { CvButtonComponent } from "../cv-button/cv-button.component";
import { FormContactComponent } from "../form-contact/form-contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ContactButtonComponent, CvButtonComponent, FormContactComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  isModalOpen = false;

  showModal() {
    this.isModalOpen = true;
  }

  hideModal() {
    this.isModalOpen = false;
  }
}
