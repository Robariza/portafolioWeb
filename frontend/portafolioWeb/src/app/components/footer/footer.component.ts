import { Component } from '@angular/core';
import { ContactButtonComponent } from "../contact-button/contact-button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
