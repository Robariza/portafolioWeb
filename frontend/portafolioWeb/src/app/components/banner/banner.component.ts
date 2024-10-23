import { Component } from '@angular/core';
import { ContactButtonComponent } from "../contact-button/contact-button.component";
import { CvButtonComponent } from "../cv-button/cv-button.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ContactButtonComponent, CvButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
